const ALL_DATA_BASE = `
		select cv.fecha_actualizacion, o.descripcion as origen, s.descripcion as sector, eu.entidad_federativa as "Entidad UMF",
		sx.descripcion as sexo, en.entidad_federativa as "Entidad nacimiento", er.entidad_federativa as "Entidad residencia", mr.municipio as "Municipio de residencia",
		tp.descripcion as "Tipo paciente", fecha_ingreso, fecha_sintomas, fecha_def, isn.descripcion as "Intubado", nsn.descripcion as "Neumonia", edad, n.descripcion as "Nacionalidad",
		esn.descripcion as "Embarazo", lsn.descripcion as "Habla lengua indígena",  dsn.descripcion as "Diabetes",  epsn.descripcion as "EPOC", asn.descripcion as "Asma",
		msn.descripcion as "Inmunosupresión", hsn.descripcion as "hipertension", osn.descripcion as "Otras enfermedades", vsn.descripcion as "Cardiovascular", bsn.descripcion as "Obesidad",
		rsn.descripcion as "Enfermedad renal crónica", tbsn.descripcion as "Tabaquismo", otsn.descripcion as "Contacto con otro COVID-19", cr.descripcion as "Resultado",
		misn.descripcion as "Migrante", pais_nacionalidad, pais_origen, ucisn.descripcion as "En UCI"
		from covid_data cv
		join origen o on cv.origen = o.clave
		join sector s on cv.sector = s.clave
		join entidades eu on cv.entidad_um = eu.clave_entidad
		join sexo sx on cv.sexo = sx.clave
		join entidades en on cv.entidad_nac = en.clave_entidad
		join entidades er on cv.entidad_res = er.clave_entidad
		join municipios mr on (cv.municipio_res = mr.clave_municipio and cv.entidad_res = mr.clave_entidad)
		join tipo_paciente tp on cv.tipo_paciente = tp.clave
		join si_no isn on cv.intubado = isn.clave
		join si_no nsn on cv.neumonia = nsn.clave
		join nacionalidad n on cv.nacionalidad = n.clave
		join si_no esn on cv.embarazo = esn.clave
		join si_no lsn on cv.habla_lengua_indig = lsn.clave
		join si_no dsn on cv.diabetes = dsn.clave
		join si_no epsn on cv.epoc = epsn.clave
		join si_no asn on cv.asma = asn.clave
		join si_no msn on cv.inmusupr = msn.clave
		join si_no hsn on cv.hipertension = hsn.clave
		join si_no osn on cv.otra_com = osn.clave
		join si_no vsn on cv.cardiovascular = vsn.clave
		join si_no bsn on cv.obesidad = bsn.clave
		join si_no rsn on cv.renal_cronica = rsn.clave
		join si_no tbsn on cv.tabaquismo = tbsn.clave
		join si_no otsn on cv.otro_caso = otsn.clave
		join resultado cr on cv.resultado = cr.clave
		join si_no misn on cv.migrante = misn.clave
		join si_no ucisn on cv.uci = ucisn.clave
	`;

module.exports = {
	ALL_DATA_BASE : ALL_DATA_BASE
}