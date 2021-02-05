const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT,
    credentials:{client_email:process.env.GCS_CLIEN_EMAIL,
    private_key:process.env.GCLOUD_PRIVATE_KEY}
  });
  

  const bucket = storage.bucket(process.env.GCS_BUCKET);

  let uploadHandler = multer({
    storage: multer.memoryStorage(),
    limits:{ 
      fileZise: 5 * 1024 * 1024
    }
  });

<<<<<<< HEAD
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
=======
  router.post('/imageupload',uploadHandler.single('file'),(req, res)=>{
    const newFileName= uuidv4()+path.extname(req.file.originalname);
    const blob = bucket.file(newFileName);
    const blobStream=blob.createWriteStream({
    resumable: false,
    gzip:true
    }).on('finish',()=>{
      const publicURL=`https://storage.googleapis.com/${process.env.GCS_BUCKET}/${blob.name}`
      res.json(publicURL);
      });
    blobStream.end(req.file.buffer);
  });

module.exports = router;
>>>>>>> 200cc4ad2299bdcb2ceba9e28b7a824b791d3a71
