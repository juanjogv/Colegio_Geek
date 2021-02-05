const express = require('express');
const router = express.Router();
const Multer = require("multer");
const { Storage } = require("@google-cloud/storage");
const uuid = require("uuid");
const uuidv1 = uuid.v1;

const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT,
    credentials: {
        client_email: process.env.GCLOUD_CLIENT_EMAIL,
        private_key: process.env.GCLOUD_PRIVATE_KEY
    }
})

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    }
})

const bucket = storage.bucket(process.env.GCS_BUCKET);

router.post('/imageupload', multer.single('file'), async (req, res) => {
    const newFileName = uuidv1() + "-" + req.file.originalname
    const blob = bucket.file(newFileName)
    const blobStream = blob.createWriteStream({
        resumable: false,
        gzip: true
    }).on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${process.env.GCS_BUCKET}/${blob.name}`
        res.json(publicUrl)
    })
    blobStream.end(req.file.buffer)
});
module.exports = router;
