var express = require('express')
var router = express.Router();
var xeploai = require('.././models/xeploai');
router.get('/:maXL?', function (req, res, next) {
    if (req.params.maXL) {
        xeploai.getAllXepLoai(req.params.maXL, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {
        xeploai.getAllXepLoai(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});



router.delete('/:maXL', function (req, res, next) {
    xeploai.deleteXL(req.params.maXL, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:maXL', function (req, res, next) {
    xeploai.updateXL(req.params.maXL, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;