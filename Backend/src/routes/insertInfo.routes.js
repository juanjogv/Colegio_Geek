const express = require('express');
const router = express.Router();
const pool = require('../database');
const format = require('pg-format');

/*REVISADO*/
router.post('/historial', async (req, res) => {
    const {codigo_estudiante, ano, grado, estado, nota_promedio, id_estudiante } = req.body;


    const newHistorial = [
         codigo_estudiante, ano, grado, estado, nota_promedio, id_estudiante
    ];

    const rows = await pool.query(format(`INSERT INTO historial ( ano, grado, 
    estado, nota_promedio, id_estudiante) VALUES %L`, [newHistorial]));

    console.log("ejecutado")
  
});

/*REVISADO*/
router.post('/grupos', async (req, res) => {
    const {codigo_grupo, jornada, id_profesor } = req.body;

    const newGrupo = [
        codigo_grupo, jornada, id_profesor
    ];

    const rows = await pool.query(format(`INSERT INTO grupos (codigo_grupo, 
        jornada ,id_profesor) VALUES %L`, [newGrupo]));

    console.log('ejecutado')

});

/* REVISADO*/
router.post('/materias', async (req, res) => {
    let sexto=false,septimo=false,octavo=false,noveno=false,decimo=false,once=false;
    // const {codigo_materia, nombre_materia, sexto, septimo, octavo,noveno, decimo,once,id_grupo } = req.body;
    const {codigo_materia, nombre_materia, grupos, id_profesor } = req.body;
    for(let grupo of grupos){
        switch (grupo) {
            case 'sexto':
              sexto=true;
              break;
            case 'septimo':
              septimo=true;
              break;
            case 'octavo':
                octavo=true;
                break;
            case 'noveno':
                noveno=true;
                break;
            case 'decimo':
                decimo=true;
                break;
            case 'once':
                once=true;
                break; 
        }          
    }

    const newGrupo = [
        codigo_materia, nombre_materia, sexto, septimo, octavo,noveno, decimo, once, id_profesor
    ];
    console.log(newGrupo)
    const rows = await pool.query(format(`INSERT INTO materias (codigo_materia, nombre_materia, sexto, septimo, octavo,noveno, decimo,once,id_profesor) VALUES %L`, [newGrupo]));

  console.log('ejecutado');

});

/*REVISADO*/
router.post('/planes_evaluacion', async (req, res) => {
    const { cantidad_notas, descripcion_plan, id_materia, id_grupo } = req.body;

    const newGrupo = [
        cantidad_notas, descripcion_plan, id_materia, id_grupo
    ];

    const rows = await pool.query(format(`INSERT INTO planes_evaluacion ( 
         cantidad_notas, descripcion_plan, id_materia, id_grupo ) VALUES %L`, [newGrupo]));

  console.log('ejecutado')
});

/*REVISADO*/
router.post('/notas', async (req, res) => {
    const {valor, id_plan_evaluacion,id_estudiante } = req.body;

    const newGrupo = [
        valor, id_plan_evaluacion,id_estudiante
    ];

    const rows = await pool.query(format(`INSERT INTO notas ( 
        valor, id_plan_evaluacion,id_estudiante  ) VALUES %L`, [newGrupo]));

    console.log('ejecutado')
    console.log('ejecutado') 
});

router.post('/estudiantes_grupos', async(req,res)=>{
  const{id_estudiante,id_grupos} = req.body
  const newGrupo = [
    id_estudiante,id_grupos
  ]

    const rows = await pool.query(format(`INSERT INTO estudiantes_grupos( 
        id_estudiante, id_grupos ) VALUES %L`, [newGrupo]));
  
  console.log('ejecutado')
  
})


module.exports = router;
