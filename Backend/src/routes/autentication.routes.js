const express = require('express');
const router = express.Router();
const multer = require('multer');
const pool = require('../database');
const format = require('pg-format');
const helpers = require('../lib/helpers');
const { UploadToBucket } = require('../lib/UploadToBucket');

router.post('/signin', async (req, res) => {
    const { rol, tipo_documento, documento_usuario, nombre_usuario, apellido_usuario, genero, fecha_nacimiento, ciudad_residencia,
        direccion_residencia, telefono_residencia, correo_electronico, telefono_celular, foto_usuario, copia_documento } = req.body;

    const pass_usuario = await helpers.encryptPassword(documento_usuario);
    const codigo_usuario = await helpers.createCodigoUsuario();
    // foto_usuario = UploadToBucket(req);
    // copia_documento = UploadToBucket(req);
    const files=[], urlFiles=[{},{}];
    if(foto_usuario[0] !== undefined) { files.push(foto_usuario[0])}
    if(copia_documento[0] !== undefined) { files.push(copia_documento[0])}
    files.map(file=>{ UploadToBucket(file)}); 
    const urlFoto_usuario = UploadToBucket(foto_usuario[0]);
    const urlCopia_documento = UploadToBucket(copia_documento[0]);

    const newUser = [
        rol, codigo_usuario, tipo_documento, documento_usuario, nombre_usuario, apellido_usuario, genero, fecha_nacimiento,
        direccion_residencia, ciudad_residencia, telefono_residencia, correo_electronico, telefono_celular,
        foto_usuario, copia_documento, pass_usuario
    ];

    if (rol == 'ESTUDIANTE') {
        const { id_grupo } = req.body;
        newUser.push(id_grupo)
        try {
            const rows = await pool.query(format(`INSERT INTO estudiantes ( codigo_usuario, tipo_documento, documento_usuario, nombre_usuario, apellido_usuario, genero, fecha_nacimiento,
                direccion_residencia, ciudad_residencia, telefono_residencia, correo_electronico, telefono_celular,
                foto_estudiante, copia_documento, pass_usuario, id_grupo) VALUES %L`, [newUser]));
            res.status(201).json("Usuario registrado");
        } catch (error) {
            res.json("Error");
        }

    } else if (rol == 'DOCENTE') {

        try {
            const rows = await pool.query(format(`INSERT INTO docentes ( codigo_usuario, tipo_documento, documento_usuario, nombre_usuario, apellido_usuario, genero, fecha_nacimiento,
                direccion_residencia, ciudad_residencia, telefono_residencia, correo_electronico, telefono_celular,
                foto_estudiante, copia_documento, pass_usuario) VALUES %L`, [newUser]));
            res.status(201).json("Usuario registrado");
        } catch (error) {
            res.json("Error");
        }

    } else if (rol == 'ADMINISTRATIVO') {

        try {
            const rows = await pool.query(format(`INSERT INTO administrativos ( codigo_usuario, tipo_documento, documento_usuario, nombre_usuario, apellido_usuario, genero, fecha_nacimiento,
                direccion_residencia, ciudad_residencia, telefono_residencia, correo_electronico, telefono_celular,
                foto_estudiante, copia_documento, pass_usuario) VALUES %L`, [newUser]));
            res.status(201).json("Usuario registrado");
        } catch (error) {
            res.json("Error");
        }

    }
});

router.post('/login', async (req, res) => {
    const { correo_electronico, contrasena_usuario } = req.body;
    console.log(req.body)
    const { rows } = await pool.query(`SELECT * FROM usuarios WHERE correo_electronico = '${correo_electronico}'`);
    if (rows.length > 0) {
        const savedpass = rows[0].pass_usuario;
        const validPass = await helpers.matchPassword(contrasena_usuario, savedpass);
        rows.push({ validPass: validPass })
        res.json(rows);
    }
});


module.exports = router;