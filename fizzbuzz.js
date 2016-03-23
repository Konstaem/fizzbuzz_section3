exports.count = function(begin, end) {

	var output = begin;
	for (var i = begin; i < end; i += 1) {
		output = output + " " + exports.fizzer((i + 1));
	}

	// return, e.g. "1 2 3 4 5"
	return output;
};

exports.fizzer = function(num) {
	// if(0 === num % 3) {
	// 	return "fizz";
	// }
	// return num;
	return 0 === num % 3 ? "fizz" : num;
};

exports.buzzer = function(num) {
	// if(0 === num % 5) {
	// 	return "buzz";
	// }
	// return num;
	return 0 === num % 5 ? "buzz" : num;
};

exports.fizzbuzzer = function(num) {
	// if(0 === num % 15) {
	// 	return "fizzbuzz";
	// }
	// return num;
	return 0 === num % 15 ? "fizzbuzz" : num;
};