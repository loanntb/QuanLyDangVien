var express = require('express')
var router = express.Router();
var congtac= require('.././models/congtac');
router.get('/:maCT?', function (req, res, next) {
    if (req.params.maCT) {
        congtac.getAllCongTac(req.params.maCT, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {
        congtac.getAllCongTac(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

// router.post('/', function (req, res, next) {
//     khenthuong.addKT(req.body, function (err, count) {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(req.body);
//         }
//     });
// });


router.delete('/:maCT', function (req, res, next) {
    congtac.deleteCT(req.params.maCT, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:maCT', function (req, res, next) {
    congtac.updateCT(req.params.maCT, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;