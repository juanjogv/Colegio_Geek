const express = require('express');
const router = express.Router();
const pool = require('../database');
const format = require('pg-format');

router.get('/teachers', async (req, res) => {
  const { rows } = await pool.query(format(`SELECT id_docente, CONCAT(nombre_usuario, ' ', apellido_usuario) AS nombre FROM docentes`));
  res.json(rows);
});

router.get('/students', async (req, res) => {
  const { rows } = await pool.query(format(`SELECT id_estudiante, documento_usuario, CONCAT(nombre_usuario, ' ', apellido_usuario) AS nombre FROM estudiantes`));
  res.json(rows);
});

router.get('/groups', async (req, res) => {
  const { rows } = await pool.query(format(`SELECT id_grupo, codigo_grupo,CONCAT(nombre_usuario, ' ', apellido_usuario) AS nombre FROM grupos`));
  res.json(rows);
});

router.get('/students-groups', async (req, res) => {
  const { rows } = await pool.query(format(`SELECT  CONCAT(estudiantes.nombre_usuario, ' ', estudiantes.apellido_usuario) AS Nombre, estudiantes.documento_usuario AS Documento, grupos.codigo_grupo AS Cod_Grupo, grupos.grado FROM estudiantes LEFT JOIN estudiantes_grupos ON estudiantes.id_estudiante = estudiantes_grupos.id_estudiante LEFT JOIN grupos ON grupos.id_grupo = estudiantes_grupos.id_grupo`));
  res.json(rows);
});

router.get('/score-student/:id_estudiante', async (req, res) => {
  const { id_estudiante } = req.params;
  const { rows } = await pool.query(format(`SELECT materias.nombre_materia AS materia, materias.codigo_materia AS cod, nota1, nota2, nota3, nota4, nota5, (nota1 + nota2 + nota3 + nota4 + nota5)/5ROUND((nota1 + nota2 + nota3 + nota4 + nota5)/5 ,2, 0) AS promedio
  FROM notas INNER JOIN  materias ON notas.id_materia = materias.id_materia where notas.id_estudiante = '${id_estudiante}';`));
  res.json(rows);
});

router.get('/students-notas/:id_docente', async (req, res) => {
  const { id_docente } = req.params;
  const { rows } = await pool.query(format(`SELECT estudiantes.documento_usuario AS documento_estudiante, concat(estudiantes.nombre_usuario, ' ', estudiantes.apellido_usuario) AS Nombre_estudiante, nota1, nota2, nota3, nota4, nota5, ROUND((nota1 + nota2 + nota3 + nota4 + nota5)/5 ,2, 0) AS promedio
  FROM notas INNER JOIN estudiantes ON estudiantes.id_estudiante = notas.id_estudiante INNER JOIN  materias ON notas.id_materia = materias.id_materia where materias.id_docente = '${id_docente}'`));
  res.json(rows);
  console.log(rows)
})


module.exports = router;
