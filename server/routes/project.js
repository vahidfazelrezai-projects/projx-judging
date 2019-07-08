var router = require('express').Router();
var Project = require('../models/Project');
var User = require('../models/User');
var perm = require('../perm');
var config = require('../../config');
var Slack = require('slack-node');

var slack = new Slack();
slack.setWebhook(config.slackWebhookUri);
// Max funding amount for this semester
var MAX_FUNDING = 500;

/**
 * GET / [team] Get project object.
 * @param {string} req.query.projectId - id of desired project
 */
router.get('/', perm.team, function(req, res) {
    Project.find({}, function (err, results) {
        if (err) res.status(404).send('Project not found');
        else {
          console.log(results.length);
        }
    });
});


/**
 * POST / [auth] Create new project and add current user to team.
 * @param {object} req.body.project new project object (name field required)
 */
router.post('/score', perm.auth, function(req, res) {
    if (!req.body.project.name) res.status(400).send('Project name missing');
    else {
        var project = req.body.project;
    }
});

module.exports = router;
