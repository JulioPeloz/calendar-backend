
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

//Todas las rutas deben pasar por la validación del JWT
router.use(validarJWT);
//Obtener eventos
router.get('/', getEventos);

//Crear eventos
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de fin es obligatoria').custom(isDate),

        validarCampos
    ],
    crearEvento);

//Obtener eventos
router.put('/:id', actualizarEvento);

//Borrar eventos
router.delete('/:id', eliminarEvento);

module.exports = router;