const express = require('express');
const router = express.Router();
const pool = require('../database');
const format = require('pg-format');
const helpers = require('../lib/helpers');

router.post('/signin', async (req, res) => {

    const { rol, tipo_documento, documento_usuario, nombre_usuario, apellido_usuario, genero, fecha_nacimiento,
        direccion_residencia, ciudad_residencia, telefono_residencia, correo_electronico, telefono_celular,
        foto_estudiante, copia_documento } = req.body;

    const pass_usuario = await helpers.encryptPassword(documento_usuario);
    const codigo_usuario = await helpers.createCodigoUsuario();

    const newUser = [
        rol, codigo_usuario, tipo_documento, documento_usuario, nombre_usuario, apellido_usuario, genero, fecha_nacimiento,
        direccion_residencia, ciudad_residencia, telefono_residencia, correo_electronico, telefono_celular,
        foto_estudiante, copia_documento, pass_usuario
    ];
    const rows = await pool.query(format(`INSERT INTO usuarios (rol, codigo_usuario, tipo_documento, documento_usuario, nombre_usuario, apellido_usuario, genero, fecha_nacimiento,
    direccion_residencia, ciudad_residencia, telefono_residencia, correo_electronico, telefono_celular,
    foto_estudiante, copia_documento, pass_usuario) VALUES %L`, [newUser]));

});

router.get('/login/:codigo_usuario/:contrasena', async (req, res) => {
    const { codigo_usuario, contrasena } = req.body;
    console.log(codigo_usuario, contrasena);
    const rows = await pool.query(`SELECT * FROM usuarios WHERE codigo_usuario = '${codigo_usuario}'`);

    if (rows.rows.length > 0) {

        const savedpass = rows.rows[0].contrasena_usuario;
        const validPass = await helpers.matchPassword(userpass, savedpass);
        rows.push({ validPass: validPass })
        res.json(rows);

    }

});



router.post('/login', async (req, res) => {
    const { codigo_usuario, contrasena } = req.body;
    console.log(codigo_usuario, contrasena);
    const rows = await pool.query(`SELECT * FROM usuarios WHERE codigo_usuario = '${codigo_usuario}'`);

    if (rows.rows.length > 0) {

        const savedpass = rows.rows[0].contrasena_usuario;
        const validPass = await helpers.matchPassword(userpass, savedpass);
        rows.push({ validPass: validPass })
        res.json(rows);

    }

});


module.exports = router;