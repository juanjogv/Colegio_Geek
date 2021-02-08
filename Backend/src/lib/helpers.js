const bcrypt = require('bcryptjs');
const pool = require('../database');
const { transporter } = require('./mailerTransporter');
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
    let checker = await pool.query('SELECT * FROM ultimo_usuario');

    if (checker.rows[0].year != year) {
        await pool.query(`UPDATE ultimo_usuario SET year = '${year}', identificador = '${0}'`);
    }

    let id = await pool.query('SELECT (SELECT identificador FROM ultimo_usuario) + 1 AS identificador;');

    await pool.query(`UPDATE ultimo_usuario SET identificador = '${id.rows[0]['identificador']}'`);

    const codigo_usuario = year + ('00' + id.rows[0]['identificador']).slice(-3);
    return codigo_usuario;
}

helpers.sendMail = (full_name, email, pass) => {

    contentHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    
    <body>
        <div style="max-width:625px;margin-top:0;margin-left:auto;margin-bottom:0;margin-right:auto">
            <table border="0" cellpadding="0" cellspacing="0" dir="ltr" id="m_22375324755315983container"
                style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif"
                width="100%">
                <tbody>
                    <tr>
                        <td align="left" id="m_22375324755315983preheaderRow"
                            style="line-height:1em;text-align:left;font-size:12px;padding-top:0;padding-right:0;padding-bottom:12px;padding-left:0">
                        </td>
                    </tr>
                    <tr>
                        <td align="left" id="m_22375324755315983logoRow"
                            style="background-color:#f5f5f5;line-height:1em;padding-bottom:18px;padding-left:13px;padding-right:13px;padding-top:24px;text-align:left"
                            valign="middle">
                            <table align="left" cellpadding="0" cellspacing="0" id="m_22375324755315983logo"
                                style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif"
                                width="200">
                                <tbody>
                                    <tr>
                                        <td align="left" style="line-height:1em;text-align:left" valign="middle"><img
                                                style="border-top-style:none;border-left-style:none;border-bottom-style:none;border-right-style:none;display:block;outline:none"
                                                title="" width="200" class="CToWUd"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="right" cellpadding="0" cellspacing="0" id="m_22375324755315983date"
                                style="border-collapse:collapse;color:#666666;font-family:Helvetica,Arial,sans-serif;font-size:16px;text-align:right!important;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none"
                                width="289">
                                <tbody>
                                    <tr>
                                        <td align="right" id="m_22375324755315983Edition" height="26"
                                            style="line-height:1em;text-align:right;padding-top:0;padding-right:30px;padding-bottom:0;padding-left:0"
                                            valign="middle"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" id="m_22375324755315983contentRow"
                            style="background-color:#f5f5f5;line-height:1em;padding-bottom:13px;padding-left:13px;padding-right:13px;padding-top:0;text-align:left">
                            <table cellpadding="0" cellspacing="0" id="m_22375324755315983moduleContainer"
                                style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif"
                                width="100%">
                                <tbody>
                                    <tr>
                                        <td align="left" style="line-height:1em;text-align:left;padding-bottom:20px">
                                            <table cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse;color:#666666;font-family:Helvetica,Arial,sans-serif;border-top-color:#e9e9e9;border-right-color:#e9e9e9;border-bottom-color:#e9e9e9;border-left-color:#e9e9e9;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px"
                                                width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td align="left"
                                                            style="background-color:#ffffff;line-height:1em;padding-bottom:30px;padding-left:31px;padding-right:31px;padding-top:30px;text-align:left">
                                                            <table cellpadding="0" cellspacing="0"
                                                                style="border-collapse:collapse;border-bottom-style:none;border-right-style:none;border-top-style:none;border-left-style:none;color:#666666;font-family:Helvetica,Arial,sans-serif"
                                                                width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="left"
                                                                            id="m_22375324755315983IntroHeadline"
                                                                            style="line-height:26px;text-align:left;font-size:14px;font-weight:normal;padding-bottom:10px">
                                                                            <span
                                                                                style="font-family:helvetica,arial,sans-serif;font-size:14px">
                                                                                Hola, ${full_name}<br><br>
                                                                                Gracias por aplicar para Colegio
                                                                                Geek.<br><br>
                                                                                Nos complace confirmar que tu solicitud ha
                                                                                sido aceptada, ahora formas parte de
                                                                                esta gran familia!
                                                                                Para poder entrar a la <a
                                                                                    href="http://colegiogeek.tech"
                                                                                    style="font-family:Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:normal;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:#ffffff;color:#4381fd;text-decoration:none"
                                                                                    target="_blank"
                                                                                    data-saferedirecturl="https://www.google.com/url?q=http://colegiogeek.tech&amp;source=gmail&amp;ust=1573939758104000&amp;usg=AFQjCNEzxxEGAIVzU_5PUO6K4afYvMqYrQ">plataforma</a>
                                                                                debes de
                                                                                ingresar tu
                                                                                usuario y contraseña que vienen
                                                                                preestablecidos de la siguiente manera.
                                                                                <h3>Correo:</h3>${email}
                                                                                <h3>Contraseña</h3>${pass}
                                                                                <br><br>
                                                                                Recuerda cambiar tu contrseña una vez hayas
                                                                                inciado sesion por primera vez.
                                                                                <br>
                                                                                Una vez más, bienvenido y esperamos
                                                                                disfrutes de este proceso formativo!<br><br>
                                                                                Que la fuerza te acompañe!<br>
                                                                                El equipo de gestion de talento de Colegio
                                                                                Geek.
                                                                            </span><br
                                                                                style="color:#666666;font-family:Verdana,Arial,Helvetica,sans-serif;font-size:14px;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-weight:normal;letter-spacing:normal;text-align:left;text-indent:0px;text-transform:none;white-space:normal;word-spacing:0px;background-color:#ffffff">
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" id="m_22375324755315983emailCopyright"
                                            style="line-height:16px;text-align:left;padding-top:0;padding-right:30px;padding-bottom:21px;padding-left:30px">
                                            <a style="color:#666666!important;text-decoration:none"
                                                href="#m_22375324755315983_">© 2021 Academia Geek</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>`;

    const mailOptions = {
        from: 'Academia Geek',
        to: email,
        subject: "Bienvenida",
        html: contentHTML
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
    });
};

module.exports = helpers;