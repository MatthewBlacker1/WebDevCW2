
const express = require('express');
const path = require('path');
const app = express();
const public = path.join(__dirname, 'public');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
app.use(express.static(public));
const router = require('./routes/activityplannerRoutes');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', router);


app.engine('mustache', mustache());
app.set('view engine', 'mustache');

router.use(function(req, res) {
    res.status(404); 
    res.type('text/plain');
    res.send('404 Not found.');
})

app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})
