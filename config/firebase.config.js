const Firebase = require('firebase-admin');

const serviceAccount = require('../drive-daab5-firebase-adminsdk-moera-18763cb4cc.json')

const firebase = Firebase.initializeApp({
    credendial:Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-daab5.firebasestorage.app'
})


module.exports = Firebase;