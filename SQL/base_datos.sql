CREATE TYPE TIPO_DOCUMENTO AS ENUM('TI','NUIM','CC');
CREATE TYPE GENERO AS ENUM('MASCULINO','FEMENINO','OTRO');
CREATE TYPE CORREO_VALIDADO AS ENUM('SI','NO');
CREATE TABLE docentes(
  id_docente serial NOT NULL PRIMARY KEY,
	rol ROL,
  codigo_docente varchar(10),
  tipo_documento TIPO_DOCUMENTO,
  documento_docente varchar(15),
  nombre_docente varchar(30),
  apellido_docente varchar(30),
  genero GENERO,
  fecha_nacimiento date,
  direccion_residencia varchar(20),
  ciudad_residencia varchar(20),
  telefono_residencia varchar(20),
  correo_electronico varchar(30),
  telefono_celular varchar(20),
  foto_estudiante varchar(500),
  copia_documento varchar(500),
  pass_docente varchar(300)
);



CREATE TABLE administrativos(
  id_administrativo serial NOT NULL PRIMARY KEY,
	rol ROL,
  codigo_administrativo varchar(10),
  tipo_documento TIPO_DOCUMENTO,
  documento_administrativo varchar(15),
  nombre_administrativo varchar(30),
  apellido_administrativo varchar(30),
  genero GENERO,
  fecha_nacimiento date,
  direccion_residencia varchar(20),
  ciudad_residencia varchar(20),
  telefono_residencia varchar(20),
  correo_electronico varchar(30),
  telefono_celular varchar(20),
  foto_estudiante varchar(500),
  copia_documento varchar(500),
  pass_administrativo varchar(300)
);



CREATE TABLE estudiantes(
  id_estudiante serial NOT NULL PRIMARY KEY,
  codigo_estudiante varchar(10),
  tipo_documento TIPO_DOCUMENTO,
  documento_estudiante varchar(15),
  nombre_estudiante varchar(30),
  apellido_estudiante varchar(30),
  genero GENERO,
  fecha_nacimiento date,
  direccion_residencia varchar(20),
  ciudad_residencia varchar(20),
  telefono_residencia varchar(20),
  correo_electronico varchar(30),
  telefono_celular varchar(20),
  foto_estudiante varchar(500),
  copia_documento varchar(500),
  pass_estudiante varchar(300),
	id_grupo BIGINT NOT NULL
);

ALTER TABLE estudiantes
	ADD CONSTRAINT fk_grupo
	FOREIGN KEY (id_grupo)
	REFERENCES grupos (id_grupo);  



CREATE TABLE ultimo_usuario(
	 year varchar(20),
	 identificador varchar(20)
);



CREATE TYPE JORNADA AS ENUM('mañana','tarde');
CREATE TABLE grupos(
  id_grupo serial NOT NULL PRIMARY KEY,
  codigo_grupo varchar(10),
  jornada JORNADA);	

ALTER TABLE grupos 
ADD id_profesor BIGINT NOT NULL;

ALTER TABLE grupos
ADD CONSTRAINT fk_profesores
FOREIGN KEY (id_profesor)
REFERENCES docentes(id_docente);

	
	
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
	id_plan_evaluacion BIGINT NOT NULL,
	id_estudiante BIGINT NOT NULL
);

ALTER TABLE notas
	ADD CONSTRAINT fk_notas_planes
	FOREIGN KEY (id_plan_evaluacion)
	REFERENCES planes_evaluacion (id_plan)
	
ALTER TABLE notas
	ADD CONSTRAINT fk_notas_estudiantes
	FOREIGN KEY (id_estudiante)
	REFERENCES estudiantes (id_estudiante)
	
	
	
CREATE TYPE ESTADO AS ENUM('1','2','3');
CREATE TABLE historial(
 id_historial SERIAL NOT NULL PRIMARY KEY,
 codigo_estudiante varchar(10),
 ano varchar(5),
 grado varchar(3),
 estado ESTADO,
 nota_promedio varchar(5),
 id_estudiante	BIGINT NOT NULL
);

ALTER TABLE historial
ADD CONSTRAINT fk_codigo
FOREIGN KEY (id_estudiante)
REFERENCES estudiantes (id_estudiante)
