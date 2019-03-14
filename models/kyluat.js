var db = require('../dbconnection');

var kyluat = {
    getAllKyLuat: function (callback) {
        return db.query("SELECT * FROM `kyluat`", callback);
    },
    getKyLuatById:function(maKL,callback){
		return db.query("SELECT * FROM `kyluat` where maKL=?",[maKL],callback);
	},
    
    deleteKL: function (maKL, callback) {
        return db.query("delete from kyluat where maKL=?", [maKL], callback);
    },
    updateKL:function(maKL,kyluat,callback){
        console.log(kyluat, maKL)
		return db.query("UPDATE `kyluat` SET `tenKL`= ? WHERE `maKL`= ?",[ kyluat.tenkl,maKL],callback);
	}
};
module.exports = kyluat;