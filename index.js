var Meishi = function() {};

Meishi.prototype.handOut = function () {

	var vals = [];

	for (var p in this) {
		if (this.hasOwnProperty(p)) {

			var prop = this[p];

			if (typeof prop === 'string' || typeof prop === 'number') {
				vals.push(prop);
			}
			
		}
	}

	return vals.join(' - ');

};

module.exports = new Meishi();
