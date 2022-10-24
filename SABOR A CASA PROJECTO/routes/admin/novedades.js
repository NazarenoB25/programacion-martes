var express = require('express');
var router = express.Router();
// var novedadesModel = require('./../../models/novedadesModel');

router.get('/', function (req, res, netx) {
    res.render('admin/novedades',{
        layout:'admin/layout'
    });
});
 


// router.get('/', async function (req, res, next) {
  
//    var novedades = await novedadesModel.getNovedades();
  
//     res.render('admin/novedades', {
//         layout: 'admin/layout',
//         usuario: req.session.nombre,
//         novedades
//     });
// });

// /* para eliminar novedad */
// router.get('/eliminar/:id', async (req, res, next) => {
//     var id = req.params.id;
    
//     await novedadesModel.delateNovedadesById(id);
//     res.redirect('/admin/novedades')

// }); /* para eliminar novedad */


module.exports = router;