var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    sessions = require('./sessions'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride()); // simulate DELETE and PUT

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin");
    next();
});

app.post('/save', sessions.saveFormInscription);
app.get('/getForm', sessions.getFormInscriptionCsv)

app.use(express.static(__dirname + '/' + "public"));

app.set('port', process.env.PORT || 12881);

app.listen(12881, '0.0.0.0', function () {
    console.log('Express server listening on port ' + app.get('port'));
});
