// IMPORTS //
var router = require('express').Router();
var path = require('path');

// ROUTES //
router.get('/portal', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/*', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../../client/login.html'));
});

module.exports = router;
