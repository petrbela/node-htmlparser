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

exports.name = "Unescaped '>'";
exports.options = {
	  handler: {}
	, parser: {}
};
exports.html = '<a title="Ex: Expres (Krakow Glowny >> Praha hl.n.)">Ex 402 Silesia</a>​';
exports.expected = [
	{
		raw: 'a title="Ex: Expres (Krakow Glowny >> Praha hl.n.)"',
		data: 'a title="Ex: Expres (Krakow Glowny >> Praha hl.n.)"',
		type: 'tag',
		name: 'a',
		attribs: { title: 'Ex: Expres (Krakow Glowny >> Praha hl.n.)' },
		children: [ {
			raw: 'Ex 402 Silesia',
			data: 'Ex 402 Silesia',
			type: 'text'
		} ]
	},
  { raw: '​', data: '​', type: 'text' }
	];

})();
