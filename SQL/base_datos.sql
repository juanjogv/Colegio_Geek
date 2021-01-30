CREATE TYPE TIPO_DOCUMENTO AS ENUM('TI','NUIM','CC');
CREATE TYPE ROL AS ENUM('ESTUDIANTE','DOCENTE','ADMINISTRATIVO');
CREATE TYPE GENERO AS ENUM('MASCULINO','FEMENINO','OTRO');
CREATE TYPE CORREO_VALIDADO AS ENUM('SI','NO');
CREATE TABLE usuarios(
  id_usuario serial NOT NULL PRIMARY KEY,
	rol ROL,
  codigo_usuario varchar(10),
  tipo_documento TIPO_DOCUMENTO,
  documento_usuario varchar(15),
  nombre_usuario varchar(30),
  apellido_usuario varchar(30),
  genero GENERO,
  fecha_nacimiento date,
  direccion_residencia varchar(20),
  ciudad_residencia varchar(20),
  telefono_residencia varchar(20),
  correo_electronico varchar(30),
  telefono_celular varchar(20),
  foto_estudiante varchar(500),
  copia_documento varchar(500)
  pass_usuario varchar(300)
);

	CREATE TABLE ultimo_usuario(
	  ano varchar(20),
		identificador varchar(20)
	);


CREATE TYPE JORNADA AS ENUM('mañana','tarde');
CREATE TABLE grupos(
  id_grupo serial NOT NULL PRIMARY KEY,
  codigo_grupo varchar(10),
  jornada JORNADA);	



CREATE TABLE usuarios_grupos(
    id_usuarios_grupo serial NOT NULL PRIMARY KEY,
    id_usuario BIGINT NOT NULL,
    id_grupo BIGINT NOT NULL);

ALTER TABLE usuarios_grupos
	ADD CONSTRAINT fk_grupo
	FOREIGN KEY (id_grupo)
	REFERENCES grupos (id_grupo);       

ALTER TABLE usuarios_grupos
  ADD CONSTRAINT fk_usuarios_grupos_u
  FOREIGN KEY (id_usuario)
  REFERENCES usuarios (id_usuario);
	


CREATE TABLE materias(
  id_materia serial NOT NULL PRIMARY KEY,
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
  id_plan SERIAL NOT NULL PRIMARY KEY,
  cantidad_notas BIGINT,
  descripcion_plan varchar(200),
	id_materia BIGINT NOT NULL,
  id_grupo BIGINT NOT NULL
);

ALTER TABLE planes_evaluacion
	ADD CONSTRAINT fk_planes_grupos
	FOREIGN KEY (id_grupo)
	REFERENCES grupos(id_grupo)
	
ALTER TABLE planes_evaluacion
	ADD CONSTRAINT fk_planes_materias
	FOREIGN KEY (id_materia)
	REFERENCES materias(id_materia)
	


CREATE TABLE notas(
	id_nota SERIAL NOT NULL PRIMARY KEY,
	valor varchar(5),
	id_plan_evaluacion BIGINT NOT NULL
);

ALTER TABLE notas
	ADD CONSTRAINT fk_notas_planes
	FOREIGN KEY (id_plan_evaluacion)
	REFERENCES planes_evaluacion (id_plan)

CREATE TYPE ESTADO AS ENUM('1','2','3');
CREATE TABLE historial(
 id_historial SERIAL NOT NULL PRIMARY KEY,
 codigo_estudiante varchar(10),
 ano varchar(5),
 grado varchar(3),
 estado ESTADO,
 nota_promedio varchar(5),
 id_usuario	BIGINT NOT NULL
);


ALTER TABLE historial
ADD CONSTRAINT fk_codigo
FOREIGN KEY (id_usuario)
REFERENCES usuarios (id_usuario)
