const router = require('express').Router();

const songsController = require('../controllers/songs-controller');

router.post('/', songsController.show);
router.post('/:id', songsController.showOne);

module.exports = router;