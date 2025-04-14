const Parser = require('rss-parser');
let parser = new Parser();

module.exports = async function() {

	let feed = await parser.parseURL('https://fastcode.substack.com/feed');
	return feed.items;
	
};
