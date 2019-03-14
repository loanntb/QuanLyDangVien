var db = require('../dbconnection');

var congtac = {
    getAllCongTac: function (callback) {
        console.log(congtac);
        return db.query("Select * from congtac", callback);
    },
    getCongTacById:function(maCT,callback){
		return db.query("select * from congtac where maCT=?",[maCT],callback);
	},
   
    deleteCT: function (maCT, callback) {
        return db.query("delete from congtac where maCT=?", [maCT], callback);
    },
    updateCT:function(maCT,congtac,callback){
        console.log(congtac, maCT);
		return db.query("UPDATE `congtac` SET `chucVu`=?,`noiCT`=?,`thoigianDen`= ?,`thoigianDi`= ? where maCT = ?",[congtac.chucvu, congtac.noict, congtac.thoigianden, congtac.thoigiandi, maCT],callback);
	}
};
module.exports = congtac;