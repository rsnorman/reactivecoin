var AWS = require('aws-sdk');
var firebase = require('firebase');

const encryptedFBKey = process.env['FIREBASE_API_KEY'];
let decryptedFBKey;

function processEvent(event, context, callback) {
  // Initialize Firebase
  var config = {
    apiKey: decryptedFBKey,
    authDomain: "reactivecoin.firebaseapp.com",
    databaseURL: "https://reactivecoin.firebaseio.com",
    projectId: "reactivecoin",
    storageBucket: "",
    messagingSenderId: process.env['FIREBASE_SENDER_ID']
  };

  const firebaseApp = firebase.initializeApp(config);
  let transactionRef = firebaseApp.database().ref('transactions').push();
  transactionRef.set({
    to: event.to,
    from: event.from,
    amount: event.amount
  }).then(function (data) {
    firebaseApp.database().goOffline();
    callback(null, 'Firebase data: ', data);
  }).catch(function (error) {
    callback('Database set error ' + error);
  });
}

exports.handler = (event, context, callback) => {
    if (decryptedFBKey) {
        processEvent(event, context, callback);
    } else {
        const kms = new AWS.KMS();
        kms.decrypt({ CiphertextBlob: new Buffer(encryptedFBKey, 'base64') }, (err, data) => {
            if (err) {
                console.log('Decrypt error:', err);
                return callback(err);

            }
            decryptedFBKey = data.Plaintext.toString('ascii');
            processEvent(event, context, callback);
        });
    }
};
