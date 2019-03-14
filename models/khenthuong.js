var db = require('../dbconnection');

var khenthuong = {
    getAllKhenthuong: function (callback) {
        return db.query("Select * from khenthuong", callback);
    },
    getKhenThuongById:function(maKT,callback){
		return db.query("select * from khenthuong where maKT=?",[maKT],callback);
	},
    addKT:function(khenthuong,callback){
		return db.query("INSERT INTO khenthuong(maKT, tenKT) VALUES (?,?)",[khenthuong.makt,khenthuong.tenkt],callback);
	},
    deleteKT: function (maKT, callback) {
        return db.query("delete from khenthuong where maKT=?", [maKT], callback);
    },
    updateKT:function(maKT,khenthuong,callback){
        console.log(khenthuong, maKT);
		return db.query("update khenthuong set tenKT=? where maKT=?",[khenthuong.tenkt,maKT],callback);
	}
};
module.exports = khenthuong;