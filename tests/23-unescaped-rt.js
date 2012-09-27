(function () {

function RunningInNode () {
	return(
		(typeof require) == "function"
		&&
		(typeof exports) == "object"
		&&
		(typeof module) == "object"
		&&
		(typeof __filename) == "string"
		&&
		(typeof __dirname) == "string"
		);
}

if (!RunningInNode()) {
	if (!this.Tautologistics)
		this.Tautologistics = {};
	if (!this.Tautologistics.NodeHtmlParser)
		this.Tautologistics.NodeHtmlParser = {};
	if (!this.Tautologistics.NodeHtmlParser.Tests)
		this.Tautologistics.NodeHtmlParser.Tests = [];
	exports = {};
	this.Tautologistics.NodeHtmlParser.Tests.push(exports);
}

exports.name = "Unescaped >";
exports.options = {
	  handler: {}
	, parser: { includeLocation: true }
};
exports.html = '<a title="Ex: Expres (Krakow Glowny >> Praha hl.n.)">Ex 402 Silesia</a>​';
exports.expected = [
	{
		raw: 'a',
		data: 'a',
		type: 'tag',
		name: 'a',
		attribs: { title: 'Ex: Expres (Krakow Glowny >> Praha hl.n.)' }
	}
	];

})();
