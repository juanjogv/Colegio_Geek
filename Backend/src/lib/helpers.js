const bcrypt = require('bcryptjs');
const pool = require('../database');
const helpers = {};

helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

helpers.matchPassword = async (password, savedPassword) => {

    try {
        return await bcrypt.compare(password, savedPassword);
    } catch (error) {
        console.log(error);
    }

};

helpers.createCodigoUsuario = async () => {
    let year = new Date().getFullYear();
    console.log(year)
    let checker = await pool.query('SELECT * FROM ultimo_usuario');

    if (checker.rows[0].year != year) {
        await pool.query(`UPDATE ultimo_usuario SET year = '${year}', identificador = '${0}'`);
    }

    let id = await pool.query('SELECT (SELECT identificador FROM ultimo_usuario) + 1 AS identificador;');

    await pool.query(`UPDATE ultimo_usuario SET identificador = '${id.rows[0]['identificador']}'`);

    const codigo_usuario = year + ('00' + id.rows[0]['identificador']).slice(-3);

    return codigo_usuario;
}

/*helpers.uploadImage = (file) => new Promise((resolve, reject) => {
    const { originalname, buffer } = file

    const blob = bucket.file(originalname.replace(/ /g, "_"))
    const blobStream = blob.createWriteStream({
        resumable: false
    })
    blobStream.on('finish', () => {
        const publicUrl = format(
            `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        )
        resolve(publicUrl)
    })
        .on('error', () => {
            reject(`Unable to upload image, something went wrong`)
        })
        .end(buffer)
});*/

module.exports = helpers;