if (process.argv.length < 4) {
    print_usage();
    return;
}

var question = process.argv[3];
var fields = 'items(title, displayLink, snippet)';
var cx = '013972680988251263703:slglaqoes_q';

var request = require('request');
var options = {
    url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA7iZi70URK1fsqkjyLVFSaiE1iXtRv7tk&fields=' + fields + '&cx=' + cx + '&q="' + question + '"'
};

function callback(error, response, body) {
    if (response.statusCode != 200) {
        console.log(response);
    }

    if (!error && response.statusCode == 200) {
        var results = JSON.parse(body);
        console.log('query returned ' + results.items.length + ' items');

        for (var i = 0; i < results.items.length; i++) {
            console.log(results.items[i].title + ' - ' + results.items[i].snippet + '\n');
        }
    }
}

function print_usage() {
    console.log('usage:   -q  "javascript undefined???"');
}

request(options, callback);
