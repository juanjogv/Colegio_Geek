const express = require('express');
const router = express.Router();
const pool = require('../database');
const format = require('pg-format');

router.post('/historial', async (req, res) => {
    const { id_historial, codigo_estudiante, ano, grado, estado, nota_promedi0, id_usuario } = req.body;

    const newHistorial = [
        id_historial, codigo_estudiante, ano, grado, estado, nota_promedi0, id_usuario
    ];

    const rows = await pool.query(format(`INSERT INTO historial (id_historial, codigo_estudiante, ano, grado, 
    estado, nota_promedio, id_usuario) VALUES %L`, [newHistorial]));

});

router.post('/usuarios_grupos', async (req, res) => {
    const { id_usuarios_grupo, id_usuario, id_grupo } = req.body;

    const newUsuarioGrupo = [
        id_usuarios_grupo, id_usuario, id_grupo
    ];

    const rows = await pool.query(format(`INSERT INTO usuarios_grupos ( id_usuarios_grupo, 
        id_usuario, id_grupo ) VALUES %L`, [newUsuarioGrupo]));

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