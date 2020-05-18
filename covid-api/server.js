var express = require("express")
var app = express()
var db = require("./database.js")
var dbConstants = require("./constants.js")

var HTTP_PORT=3000
app.listen(HTTP_PORT, () => {
	console.log("Ok");
});

app.get("/", (req, res, next) => {
	res.json({"message": "ok"});
});

app.get("/api/v1/totals", (req, res, next) => {
  var sql = "select r.descripcion,count(*) from covid_data cv join resultado r on cv.resultado = r.clave group by r.descripcion"
  var params = []
  db.all(sql, params, (err, rows) =>{
  	if (err) {
  		res.status(400).json({"error": err.message});
  		return;
  	} else {
  		res.json({
  			"message": "success",
  			"data": rows
  		});
  	}
  });
});

app.get("/api/v1/totals/state/:id", (req, res, next) => {
	var sql = "select m.municipio, count(*) from covid_data cv join resultado r on cv.resultado = r.clave join municipios m on (cv.municipio_res = m.clave_municipio and cv.entidad_res = m.clave_entidad) where cv.resultado = 1 and m.clave_entidad = ? group by m.municipio order by m.municipio"
	var params = [req.params.id]
	db.all(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({"error": err.message});
		} else {
			res.json({
				"message": "success",
				"data": rows
			});
		}
	});
});

app.get("/api/v1/alldata", (req, res, next) => {
	var sql = dbConstants.ALL_DATA_BASE + ";"
	var params = []
	db.all(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({"error": err.message});
		} else {
			res.json({
				"message": "success",
				"data": rows
			});
		}
	});
});

app.get("/api/v1/alldata/state/:id", (req, res, next) => {
	var sql = dbConstants.ALL_DATA_BASE + " where cv.resultado = 1 and cv.entidad_res = ?;"
	var params = [req.params.id]
	db.all(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({"error": err.message});
		} else {
			res.json({
				"message": "success",
				"data": rows
			});
		}
	});
});

app.get("/api/v1/alldata/state/:id/municipality/:idm", (req, res, next) => {
	var sql = dbConstants.ALL_DATA_BASE + " where cv.resultado = 1 and cv.entidad_res = ? and cv.municipio_res = ?;"
	var params = [req.params.id, req.params.idm]
	db.all(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({"error": err.message});
		} else {
			res.json({
				"message": "success",
				"data": rows
			});
		}
	});
});

app.use(function(req, res){
	res.status(404);
});