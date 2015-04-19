const settings = {'api_key': 'AIzaSyA7iZi70URK1fsqkjyLVFSaiE1iXtRv7tk',
				  'url': 'https://www.googleapis.com/customsearch/v1?key=',
				  'url_suffix': '&fields=kind,items(title)'};

if (process.argv.length < 4) {
	print_usage();
	return;
}

var request = require('request');
var question = process.argv[3];
var formatted_url = settings.url + settings.api_key + '&cx=017576662512468239146:omuauf_lfve&q=' + question + settings.url_suffix;
console.log('asking the gods about "' + question + '"');


request(formatted_url, function (error, response, body) {
	if (error) {
		console.log(error);
	}
	console.log(response);

	if (!error && response.statusCode == 200) {
		var response = JSON.parse(body);
		console.log(response);
	}
})

function print_usage() {
	console.log('usage: 	-q 	"javascript undefined???"');
}
