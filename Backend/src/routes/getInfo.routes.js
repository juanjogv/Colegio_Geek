const express = require('express');
const router = express.Router();
const pool = require('../database');
const format = require('pg-format');

router.get('/teachers', async (req, res) => {
  const {rows} = await pool.query(format(`SELECT id_docente, CONCAT(nombre_usuario, ' ', apellido_usuario) AS nombre FROM docentes`));
  res.json(rows);
  });

module.exports = router;