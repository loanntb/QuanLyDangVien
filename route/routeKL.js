var express = require('express')
var router = express.Router();
var kyluat = require('.././models/kyluat');
router.get('/:maKL?', function (req, res, next) {
    if (req.params.maKL) {
        kyluat.getAllKyLuat(req.params.maKL, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {
        kyluat.getAllKyLuat(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});



router.delete('/:maKL', function (req, res, next) {
    kyluat.deleteKL(req.params.maKL, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:maKL', function (req, res, next) {
    kyluat.updateKL(req.params.maKL, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;