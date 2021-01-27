const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async (req, res) => {
    res.send('API funcionando!!!');
})

module.exports = router;