const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
    // keyFilename: path.join(__dirname, "../backend-303114-5f186b208c6c.json"),
    projectId: process.env.GCLOUD_PROJECT,
    credentials:{client_email:process.env.GCS_CLIEN_EMAIL,
    private_key:process.env.GCLOUD_PRIVATE_KEY}
    // filename:
  });
  

  const bucket = storage.bucket(process.env.GCS_BUCKET);

  let uploadHandler = multer({
    storage: multer.memoryStorage(),
    limits:{ 
      fileZise: 5 * 1024 * 1024
    }
  });

  router.post('/imageupload',uploadHandler.single('file'),(req, res)=>{
    const newFileName= uuidv4()+path.extname(req.file.originalname);
    const blob = bucket.file(newFileName);
    const blobStream=blob.createWriteStream({
    resumable: false,
    gzip:true
    }).on('finish',()=>{
      const publicURL=`https://storage.googleapis.com/${process.env.GCS_BUCKET}/${blob.name}`
      //const imageDetails=JSON.parse(req.body);
      // imageDetails.image=publicURL;
      res.json('ok');
      //db.Image.create(imageDetails).then(() => res.json(imageDetails))
      });
    blobStream.end(req.file.buffer);
  });

module.exports = router;