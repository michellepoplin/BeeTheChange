const router = require('express').Router();
const UserController = require('../../controllers/User');

router.get('/', UserController.findAll);
router.get('/:id', UserController.find);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;
