const router = require('express').Router();
const FarmerController = require('../../controllers/Farmer');

router.get('/', FarmerController.findAll);
router.get('/:id', FarmerController.find);
router.post('/', FarmerController.create);
router.put('/:id', FarmerController.update);
router.delete('/:id', FarmerController.delete);

module.exports = router;
