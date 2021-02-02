const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const Multer = require("multer");
const { Storage } = require("@google-cloud/storage");
const uuid = require("uuid");
const uuidv1 = uuid.v1;
const { UploadToBucket } = require('../lib/UploadToBucket');
=======
const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const { Storage } = require("@google-cloud/storage");
>>>>>>> a12f5ee7693b5bbd4ca7c49ac3a5fbd86e105468

const storage = new Storage({
    // keyFilename: path.join(__dirname, "../backend-303114-5f186b208c6c.json"),
    projectId: process.env.GCLOUD_PROJECT,
    credentials:{client_email:process.env.GCS_CLIEN_EMAIL,
    private_key:process.env.GCLOUD_PRIVATE_KEY}
    // filename:
  });
  

  const bucket = storage.bucket(process.env.GCS_BUCKET);

<<<<<<< HEAD
router.post('/imageupload', multer.single('file'), (req, res) => {
    UploadToBucket(req);
    res.json('ok');
})
=======
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
>>>>>>> a12f5ee7693b5bbd4ca7c49ac3a5fbd86e105468

module.exports = router;