const express = require('express');
const router = express.Router();
const controller = require('../controllers/activityplannerControllers.js');

router.get("/", controller.landing_page);
router.get('/frankactvity', controller.display_frank);
router.get('/activities', controller.entries_list);
router.get('/newactivity', function(req, res) {
    res.redirect('new-activity.html');
})
router.get('/new', controller.show_new_entries);
router.get('/posts/:author', controller.show_user_entries);
router.get('/delete/:id', controller.delete_entry);
router.post('/new', controller.post_new_entry);
router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})
router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})
module.exports = router;
