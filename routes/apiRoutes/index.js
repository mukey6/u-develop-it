const express = require('express');
const router = express.Router();

// router.use(express.urlencoded({ extended: false }));
// router.use(express.json());

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

module.exports = router;