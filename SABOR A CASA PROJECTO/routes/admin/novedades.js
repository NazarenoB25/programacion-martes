var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel');
var util = require("util");
var cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);



router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

/* para eliminar novedad */
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
});
/* para eliminar novedad */


/* para agregar novedad */

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
});
/* para agregar novedad */

router.post('/agregar', async (req, res, next) => {
    try {
        var imagen = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            imagen = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad({
                ...req.body,
                imagen: img_id
            });
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                massage: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo la novedad'
        })
    }
})

router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadesById(id);
    res.render("admin/modificar", {
        layout: 'admin/layout',
        novedad
    });
});


router.post('/modificar', async (req, res, next) => {
    try {
        var obj = {
            titulo: req.body.titulo,
            cuerpo: req.body.cuerpo,
            
        }

        console.log(obj)
        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            massage: 'No se modifico la noverdad'
        })
    }
});



module.exports = router;