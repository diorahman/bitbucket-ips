var request = require ('superagent');
var cheerio = require ('cheerio');
var URL = 'https://confluence.atlassian.com/display/BITBUCKET/What+are+the+Bitbucket+IP+addresses+I+should+use+to+configure+my+corporate+firewall';

function parse (html) {
	var $ = cheerio.load(html);
	var obj = {};
	$('.confluenceTable tbody tr').each(function(){
		var left = true;
		$(this).find('td').each(function(){
			var text = $(this).text().trim();
			if (left){
				obj.inbounds = obj.inbounds || []; 
				if (text) obj.inbounds.push(text);
				left = false;
			} else {
				obj.outbounds = obj.outbounds || [];
				if (text) obj.outbounds.push(text);
			}
		});
	});
	return obj;
}

module.exports = function(cb){
  request
  .get(URL)
  .end(function(err, res){
    if (err) return cb(err);
    if (res.status != 200) return cb(new Error(res.status));
    cb(err, parse(res.text));
  });
}

