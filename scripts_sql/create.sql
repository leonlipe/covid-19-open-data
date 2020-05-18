create table covid_data(FECHA_ACTUALIZACION string, ID_REGISTRO string, ORIGEN integer, SECTOR integer, ENTIDAD_UM string,SEXO integer,
ENTIDAD_NAC string, ENTIDAD_RES string, MUNICIPIO_RES string, TIPO_PACIENTE integer, FECHA_INGRESO string,FECHA_SINTOMAS string,FECHA_DEF string,INTUBADO integer,
NEUMONIA integer,EDAD integer,NACIONALIDAD integer,EMBARAZO integer,HABLA_LENGUA_INDIG integer,DIABETES integer,EPOC integer,ASMA integer,
INMUSUPR integer,HIPERTENSION integer,OTRA_COM integer,CARDIOVASCULAR integer,OBESIDAD integer,RENAL_CRONICA integer,TABAQUISMO integer,
OTRO_CASO integer,RESULTADO integer,MIGRANTE integer,PAIS_NACIONALIDAD string,PAIS_ORIGEN string,UCI integer);

create table origen(clave integer, descripcion string);

create table sector(clave integer, descripcion string);

create table sexo(clave integer, descripcion string);

create table tipo_paciente(clave integer, descripcion string);

create table si_no(clave integer, descripcion string);

create table nacionalidad(clave integer, descripcion string);

create table resultado(clave integer, descripcion string);

create table entidades(clave_entidad string, entidad_federativa string, abreviatura string);

create table municipios(clave_municipio string, municipio string, clave_entidad string);