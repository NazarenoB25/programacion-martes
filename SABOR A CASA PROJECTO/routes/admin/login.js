var express = require('express');
var router = express.Router();
// var usuariosModel = requiere('./../../models/usuariosModel')

router.get('/', function (req, res, next) {
    res.render('admin/login',{
        layout:'admin/layout'
    });
});

module.exports = router;






