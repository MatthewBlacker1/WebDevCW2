const nedb = require('nedb');
const db = new nedb({});
class GuestBook {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
         } else {
            this.db = new nedb();
    } }

 init() {
    this.db.insert({
        activityGoal: 'Pushups',
        contents: '3 sets, 20 reps, 10 minutes',
        published: '2021-02-20',
        author: 'Frank'
});
    console.log('db entry Frank inserted');
   
    this.db.insert({
        activityGoal: "Bike Ride",
        contents: '45 minutes, regular route',
        published: '2021-01-13',
        author: 'Jenny'
});
    console.log('db entry Jenny inserted');
 
 this.db.insert({
    activityGoal: "Cook Dinner",
    contents: '1 hour, New recipe, Natural ingredients',
    published: '2021-03-10',
    author: 'Dan'
});
console.log('db entry Dan inserted');
}
getFrank()
{
     
     return new Promise((resolve, reject) => {
        this.db.find({ author: 'Frank' }, function(err, entries) {
            if (err) {
                reject(err);
            } else {
                resolve(entries);
                console.log('function getFrank() returns: ', entries);
            }
        })
    })  
}

addEntry(author, activityGoal, contents) {
    var entry = {
        author: author,
        activityGoal: activityGoal,
        contents: contents,
        published: new Date().toISOString().split('T')[0]
    }
    
    console.log('entry created', entry);
    this.db.insert(entry, function(err, doc) {
        if (err) {
            console.log('Error inserting document', subject);
        } else {
            console.log('document inserted into the database', doc);
        }
}) }

getEntriesByUser(authorName) {
    return new Promise((resolve, reject) => {
        this.db.find({ 'author': authorName }, function(err, entries) {
            if (err) {
                reject(err);
            } else {
                resolve(entries);
                console.log('getEntriesByUser returns: ', entries);
            }
}) })
}
getEntriesByUser(authorName) {
    return new Promise((resolve, reject) => {
        this.db.find({ 'author': authorName }, function(err, entries) {
            if (err) {
                reject(err);
            } else {
                resolve(entries);
                console.log('getEntriesByUser returns: ', entries);
            }
}) })
}


deleteEntry(id) {
    this.db.remove({_id: id}, {}, function(err, rem) {
        if (err) {
            console.log('error in deleteEntry', err);
        } else {
            console.log(rem, 'entries deleted'); 
} })
}


getAllEntries() {
    return new Promise((resolve, reject) => {
        this.db.find({}, function(err, entries) {
            if (err) {
                reject(err);
            } else {
                resolve(entries);
                console.log('function all() returns: ', entries);
} 
})
}) 
}
}
 module.exports = GuestBook;


