var express = require('express')
var router = express.Router();
var khenthuong = require('.././models/khenthuong');
router.get('/:maKT?', function (req, res, next) {
    if (req.params.maKT) {
        khenthuong.getAllKhenthuong(req.params.maKT, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {
        khenthuong.getAllKhenthuong(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.post('/', function (req, res, next) {
    khenthuong.addKT(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});


router.delete('/:maKT', function (req, res, next) {
    khenthuong.deleteKT(req.params.maKT, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:maKT', function (req, res, next) {
    khenthuong.updateKT(req.params.maKT, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;