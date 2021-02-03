const express = require('express');
const router = express.Router();
const pool = require('../database');
const format = require('pg-format');

router.post('/historial', async (req, res) => {
    const { ano, grado, estado, nota_promedio, id_estudiante } = req.body;

    const newHistorial = [
         ano, grado, estado, nota_promedio, id_estudiante
    ];

    const rows = await pool.query(format(`INSERT INTO historial ( ano, grado, 
    estado, nota_promedio, id_estudiante) VALUES %L`, [newHistorial]));

    console.log("ejecutado")
  
});

router.post('/grupos', async (req, res) => {
    const { id_grupo, codigo_grupo, jornada } = req.body;

    const newGrupo = [
        id_grupo, codigo_grupo, jornada
    ];

    const rows = await pool.query(format(`INSERT INTO grupos ( id_grupo, codigo_grupo, 
        jornada ) VALUES %L`, [newGrupo]));

});

/* Por terminar */
router.post('/materias', async (req, res) => {
    const { id_grupo, codigo_grupo, jornada } = req.body;

    const newGrupo = [
        id_grupo, codigo_grupo, jornada
    ];

    const rows = await pool.query(format(`INSERT INTO grupos ( id_grupo, codigo_grupo, 
        jornada ) VALUES %L`, [newGrupo]));

});

router.post('/planes_evaluacion', async (req, res) => {
    const { id_plan, cantidad_notas, descripcion_plan, id_materia, id_grupo } = req.body;

    const newGrupo = [
        id_plan, cantidad_notas, descripcion_plan, id_materia, id_grupo
    ];

    const rows = await pool.query(format(`INSERT INTO planes_evaluacion ( 
        id_plan, cantidad_notas, descripcion_plan, id_materia, id_grupo ) VALUES %L`, [newGrupo]));

});

router.post('/notas', async (req, res) => {
    const { id_notas, valor, id_plan_evaluacion } = req.body;

    const newGrupo = [
        id_notas, valor, id_plan_evaluacion
    ];

    const rows = await pool.query(format(`INSERT INTO planes_evaluacion ( 
        id_notas, valor, id_plan_evaluacion  ) VALUES %L`, [newGrupo]));

});

module.exports = router;
