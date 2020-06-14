const express = require('express')
const bodyParser = require('body-parser')
const fcm = require('./services/fcm-admin')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen(process.env.PORT || 3000, () => {
    const serverAddress = server.address();
    console.log(`Server running at http://localhost:${serverAddress.port}`);
})

app.post('/send/notification', (req, res, next) => {
    const { token, message } = req.body
    const options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    }
    fcm.messaging()
        .sendToDevice(token, message, options)
        .then(response => {
            res.status(200).send("Notification sent successfully.")
        })
        .catch(error => {
            console.log(error)
        })

})