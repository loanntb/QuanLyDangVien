var db = require('../dbconnection');

var dangvien = {
    getAlldangvien: function (callback) {
        return db.query("Select * from dangvien", callback);
    },
    getdangvienById: function (maDV, callback) {
        return db.query("select * from dangvien where maDV=?", [maDV], callback);
    },
    addDV: function (dangvien, callback) {
        console.log(dangvien);
        return db.query("INSERT INTO `dangvien`(`maDV`, `maCT`, `maKT`, `maKL`, `maXL`, `hoTen`, `ngaySinh`, `gioiTinh`, `CMTND`, `danToc`, `tonGiao`, `diaChi`, `ngheNhiep`, `ngayVaoDang`, `noiVaoDang`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [dangvien.maDV, dangvien.maCT, dangvien.maKT, dangvien.maKL, dangvien.maXL, dangvien.hoTen, dangvien.ngaySinh, dangvien.gioiTinh, dangvien.CMTND, dangvien.danToc, dangvien.tonGiao, dangvien.diaChi, dangvien.ngheNghiep, dangvien.ngayVaoDang, dangvien.noiVaoDang], callback);

    },
    deleteDV: function (maDV, callback) {
        return db.query("delete from dangvien where maDV=?", [maDV], callback);
    },
    updateDV: function (maDV, dangvien, callback) {
        console.log(dangvien, maDV);
        return db.query("UPDATE dangvien SET maCT= ?, maKT= ?, maKL=?, maXL=?, hoTen=?, ngaySinh=?, gioiTinh=?, CMTND=?, danToc=?, tonGiao=?, diaChi=?, ngheNhiep=?, ngayVaoDang=?, noiVaoDang=? WHERE maDV = ?", 
        [dangvien.maCT,dangvien.maKT, dangvien.maKL, dangvien.maXL, dangvien.hoTen, dangvien.ngaySinh, dangvien.gioiTinh, dangvien.CMTND, dangvien.danToc, dangvien.tonGiao, dangvien.diaChi, dangvien.ngheNghiep, dangvien.ngayVaoDang, dangvien.noiVaoDang, maDV], callback);
    }
};
module.exports = dangvien;
