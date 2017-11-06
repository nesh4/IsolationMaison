var csvWriter = require('csv-write-stream');
var lockFile = require('lockfile');
const fs = require('fs');
var XLSX = require('js-xlsx');

exports.saveFormInscription = function (req, res) {
    console.log(req.body);
    var headArray = [];

    for (head in req.body) {
        headArray.push(head)
    }

    var writer = {};
    var nameOfFile = nameByDay();
    if (!fs.existsSync('data/' + nameOfFile))
        writer = csvWriter({
            headers: headArray
        });
    else
        writer = csvWriter({
            sendHeaders: false
        });


    writer.pipe(fs.createWriteStream('data/' + nameOfFile, {
        'flags': 'a'
    }))

    writer.write(req.body);
    writer.end()
};


exports.getFormInscriptionCsv = function (req, res) {
    res.sendFile(__dirname + '/data/' + nameByDay());
}

function nameByDay() {
    var dateTime = new Date();
    var day = dateTime.getDay();
    var month = dateTime.getMonth();
    var year = dateTime.getYear();

    return day + "-" + month + "-" + year + ".csv";
}
