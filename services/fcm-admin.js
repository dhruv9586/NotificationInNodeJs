const admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.cert("Load your service account key json"),
    databaseURL: "Enter your firebase url here"
})

module.exports = admin;