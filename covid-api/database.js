var sqlite3 = require("sqlite3").verbose()
var md5 = require('md5')

const DBSOURCE="../sqlite3_data/covid.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
	if (err) {
		console.log("Error opening DB")
		throw err
	} else {
		console.log("Connected to DB")

	}
});


module.exports = db