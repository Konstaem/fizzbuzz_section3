exports.count = function(begin, end) {

	var output = begin;
	for (var i = begin; i < end; i += 1) {
		output = output + " " + (i + 1);
	}


	// return, e.g. "1 2 3 4 5"
	return output;
};