var express = require('express')
var router = express.Router();
var dangvien = require('.././models/dangvien');
router.get('/:maDV?', function (req, res, next) {
    if (req.params.id) {
        dangvien.getAlldangvien(req.params.maDV, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {
        dangvien.getAlldangvien(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/', function (req, res, next) {
    dangvien.addDV(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.delete('/:maDV', function (req, res, next) {
    dangvien.deleteDV(req.params.maDV, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:maDV', function (req, res, next) {
    dangvien.updateDV(req.params.maDV, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;