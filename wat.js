if (process.argv.length < 4) {
    print_usage();
    return;
}

var question = process.argv[3];
var blacklist = ['Stack Overflow'];
var google = {
    fields: 'items(title, displayLink, snippet)',
    cx: '013972680988251263703:slglaqoes_q',
    api: 'AIzaSyA7iZi70URK1fsqkjyLVFSaiE1iXtRv7tk',
};

var options = {
    url: 'https://www.googleapis.com/customsearch/v1?key=' + google.api + '&fields=' + google.fields + '&cx=' + google.cx + '&q="' + question + '"'
};

var request = require('request');

function callback(error, response, body) {
    if (response.statusCode != 200) {
        console.log(response);
    }

    if (!error && response.statusCode == 200) {
        var results = JSON.parse(body);
        console.log('query returned ' + results.items.length + ' items');

        console.log(removeCommonWords(results.items[0].title));

        for (var i = 0; i < results.items.length; i++) {
            console.log(removeCommonWords(results.items[i].title) + ' - ' + results.items[i].snippet);
        }
    }
}

function removeCommonWords(title) {
    var content = title;
    for (var word in blacklist) {
        content = content.replace(word, 'bobba fett');
    }
    console.log(content);
    return content;
}

function print_usage() {
    console.log('usage:   -q  "javascript undefined???"');
}

request(options, callback);
