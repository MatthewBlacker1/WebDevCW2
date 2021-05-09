const GuestBook = require('../models/activityplannerModel');
const guestbookDAO = require('../models/activityplannerModel');
const db = new guestbookDAO();
db.init()

exports.delete_entry = function(req, res) { console.log("id in delete_entry", req.params.id);
    res.send('<h1>Delete entry called.</h1>'); 
    db.deleteEntry(req.params.id);
}
    
 exports.landing_page = function(req, res) {
    db.getAllEntries().then((list) => {
        res.render('entries', {
            'title': 'Activity Planner',
            'entries': list
});
        console.log('promise resolved');
    }).catch((err) => {
        console.log('promise rejected', err);
    })}

exports.new_actvity = function(req, res) {
    res.redirect('/');
}
exports.entries_list = function(req, res) {
    res.send('<h1>Not yet implemented: show activites</h1>');
    db.getAllEntries();
}
exports.show_new_entries = function(req, res) {
    res.render('newEntry', {
        'title': 'Guest Book'
    })
}
exports.display_frank = function(req, res) {
    res.send('<h1> Not yet implemented, Check log for frank activities</h1>')
    db.getFrank();
}
exports.show_user_entries = function(req, res) {
    console.log('filtering author name', req.params.author);
    let user = req.params.author;
    db.getEntrieByUser(user).then((entries) => {
        res.render('entries', {
            'title': 'Guest Book',
            'entries': entries
        });
    }).catch((err) => {
        console.log('error handling author posts', err);
    });
}
exports.post_new_entry = function(req, res) {
    if (!req.body.author) {
        response.status(400).send("Entries must have an author.");
        return;
}
db.addEntry(req.body.author, req.body.subject, req.body.contents);
res.redirect('/');
}






