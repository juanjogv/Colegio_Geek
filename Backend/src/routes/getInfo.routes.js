const express = require('express');
const router = express.Router();
const pool = require('../database');
const format = require('pg-format');

router.get('/teachers', async (req, res) => {
  const {rows} = await pool.query(format(`SELECT id_docente, CONCAT(nombre_usuario, ' ', apellido_usuario) AS nombre FROM docentes`));
  res.json(rows);
  });

router.get('/students', async (req, res) => {
  const {rows} = await pool.query(format(`SELECT id_estudiante, documento_usuario, CONCAT(nombre_usuario, ' ', apellido_usuario) AS nombre FROM estudiantes`));
  res.json(rows);
  });

router.get('/groups', async (req, res) => {
  const {rows} = await pool.query(format(`SELECT id_grupo, codigo_grupo,CONCAT(nombre_usuario, ' ', apellido_usuario) AS nombre FROM grupos`));
  res.json(rows);
  });

  router.get('/students-groups', async (req, res) => {
    const {rows} = await pool.query(format(`SELECT  CONCAT(estudiantes.nombre_usuario, ' ', estudiantes.apellido_usuario) AS Nombre, estudiantes.documento_usuario AS Documento, grupos.codigo_grupo AS Cod_Grupo, grupos.grado FROM estudiantes LEFT JOIN estudiantes_grupos ON estudiantes.id_estudiante = estudiantes_grupos.id_estudiante LEFT JOIN grupos ON grupos.id_grupo = estudiantes_grupos.id_grupo`));
    res.json(rows);
    });


module.exports = router;