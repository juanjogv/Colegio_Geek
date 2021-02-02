const express = require("express");
const router = express.Router();
const Multer = require("multer");
const { Storage } = require("@google-cloud/storage");
const uuid = require("uuid");
const uuidv1 = uuid.v1;
const { UploadToBucket } = require('../lib/UploadToBucket');

const storage = new Storage({
    // keyFilename: path.join(__dirname, "../backend-303114-5f186b208c6c.json"),
    projectId: process.env.GCLOUD_PROJECT,
    credentials: {
        client_email: process.env.GCS_CLIEN_EMAIL,
        private_key: process.env.GCLOUD_PRIVATE_KEY
    }
    // filename:
});


const bucket = storage.bucket(process.env.GCS_BUCKET);

router.post('/imageupload', multer.single('file'), (req, res) => {
    UploadToBucket(req);
    res.json('ok');
})

module.exports = router;