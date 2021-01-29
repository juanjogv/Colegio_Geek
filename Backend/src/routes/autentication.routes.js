const express = require('express');
const router = express.Router();
const pool = require('../database');
const format = require('pg-format');

router.post('/signin', async (req, res) => {

    const { rol, tipo_documento, documento_usuario, nombre_usuario, apellido_usuario, genero, fecha_nacimiento,
        direccion_residencia, ciudad_residencia, telefono_residencia, correo_electronico, telefono_celular,
        foto_estudiante, copia_documento, contrasena } = req.body;

    let id = await pool.query('SELECT (SELECT id_usuarios FROM usuarios  ORDER BY id_usuarios DESC LIMIT 1) + 1 AS id_usuarios;');
    const codigo_usuario = new Date().getFullYear() + ('00' + id.rows[0]['id_usuarios']).slice(-3);

    const newUser = [
        rol, codigo_usuario, tipo_documento, documento_usuario, nombre_usuario, apellido_usuario, genero, fecha_nacimiento,
        direccion_residencia, ciudad_residencia, telefono_residencia, correo_electronico, telefono_celular,
        foto_estudiante, copia_documento, contrasena
    ];

    const rows = await pool.query(format(`INSERT INTO usuarios (codigo_usuario, tipo_documento, documento_usuario, nombres_usuario, apellidos_usuario, genero, fecha_nacimiento,
        direccion_residencia, ciudad_residencia, telefono_residencia, correo_electronico, telefono_celular,
        foto_estudiante, copia_documento) VALUES %L`, [newUser]));
});

router.post('/login', async (req, res) => {
    const { codigo_usuario, documento_usuario, contrasena } = req.body;
    const checkUser = [
        codigo_usuario,
        documento_usuario,
        contrasena
    ]

});


module.exports = router;