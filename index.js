var needle = require('needle');
var cheerio = require('cheerio');

url = 'chrome://history/'
needle.get(url, function(err,res){
    if (err) throw (err);

    var $ = cheerio.load(res,body);

    console.log($('.page-item iron-selected').text())


});
