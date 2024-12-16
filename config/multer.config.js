const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');

const firebase = require('./firebase.config');

const serviceAccount = require('../drive-daab5-firebase-adminsdk-moera-18763cb4cc.json')

const storage = firebaseStorage({
    credentials:firebase.credential.cert(serviceAccount),
    bucketName : 'drive-daab5.firebasestorage.app',
    unique:true
})


const upload = multer({
    storage: storage,

})

module.exports = upload;