var db = require('../dbconnection');

var xeploai = {
    getAllXepLoai: function (callback) {
        return db.query("Select * from xeploai", callback);
    },
    getXepLoaiById:function(maXL,callback){
		return db.query("select * from xeploai where maXL=?",[maXL],callback);
	},
    deleteXL: function (maXL, callback) {
        return db.query("delete from xeploai where maXL =?", [maXL], callback);
    },
    updateXL:function(maXL,xeploai,callback){
        console.log(xeploai, maXL);
		return db.query("update xeploai set tenXL=? where maXL=?",[xeploai.tenxl,maXL],callback);
	}
};
module.exports = xeploai;