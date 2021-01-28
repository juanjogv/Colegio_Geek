CREATE DATABASE academia_geek;

CREATE TYPE TIPO_DOCUMENTO AS ENUM('TI','NUIM','CC');
CREATE TABLE usuarios(
  id_usuarios BIGINT NOT NULL PRIMARY KEY,
  codigo_usuario varchar(10),
  tipo_documento TIPO_DOCUMENTO,
  documento_usuario varchar(15),
  nombres_usuario varchar(30),
  apellidos_usuario varchar(30),
  sexo BIGINT,
  fecha_nacimiento date,
  direccion_residencia varchar(20),
  ciudad_residencia varchar(20),
  telefono_residencia varchar(20),
  correo_electronico varchar(30),
  telefono_celular varchar(20),
  foto_estudiante varchar(500),
  copia_documento varchar(500));



CREATE TYPE JORNADA AS ENUM('mañana','tarde');
CREATE TABLE grupos(
  id_grupo BIGINT NOT NULL PRIMARY KEY,
  codigo_grupo varchar(10),
  jornada JORNADA);



CREATE TABLE usuarios_grupos(
    id_usuarios_grupos BIGINT NOT NULL PRIMARY KEY,
    id_usuarios BIGINT NOT NULL,
    id_grupos BIGINT NOT NULL);

  ALTER TABLE usuarios_grupos
	ADD CONSTRAINT fk_grupos
	FOREIGN KEY (id_grupos)
	REFERENCES grupos (id_grupo);       

ALTER TABLE usuarios_grupos
  ADD CONSTRAINT fk_usuarios_grupos_u
  FOREIGN KEY (id_usuarios)
  REFERENCES usuarios (id_usuarios)



CREATE TABLE materias(
  id_materia BIGINT NOT NULL PRIMARY KEY,
  codigo_materia varchar(10),
  nombre_materia varchar(20),
  sexto SMALLINT,
  septimo SMALLINT,
  octavo SMALLINT,
  noveno SMALLINT,
  decimo SMALLINT,
  once SMALLINT,
  id_grupo BIGINT NOT NULL
);

ALTER TABLE materias
  ADD CONSTRAINT fk_grupos_materias
  FOREIGN KEY (id_grupo)
  REFERENCES grupos (id_grupo); 



CREATE TABLE planes_evaluacion(
  id_plan BIGINT NOT NULL PRIMARY KEY,
  cantidad_notas BIGINT,
  descripcion_plan varchar(200),
  id_grupo BIGINT NOT NULL
);






