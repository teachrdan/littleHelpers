/*jshint esversion: 6 */

var phonePad = {
	'0': ['a'],
	'1': ['b','c'],
	'2': ['d','e','f'],
	'3': ['g','h','i'],
	'4': ['j','k','l'],
	'5': ['m','n','o'],
	'6': ['p','q','r'],
	'7': ['s','t','u'],
	'8': ['v','w','x'],
	'9': ['y','z']
};

var phonenumberToLetters = function(numbers) {
	if (!numbers || typeof numbers!=='number') return;
	var numArray = numbers.toString().split('');
	var result = [];
	for (let i in numArray) {
		result.push(phonePad[numArray[i]]);
	}
	return result;
};

phonenumberToLetters(3265011);

var lettersToPossibleWords = function(letterArrays=[[]]) {
	if (letterArrays.length===1 && letterArrays[0].length===0) return;
	var recurse = function(active='', remaining=[], storage=[]) {
		console.log("active, remaining", active, remaining);
		if (active.length===0 && remaining.length===0) return;
		if (remaining.length===0) {
			storage.push(active);
		} else {
			// remove any empty array
			if (remaining[0].length===0) remaining=remaining.splice(1);
			// TODO fix this
			for (let i in remaining[0]) {
				var nextRemaining=remaining.shift();
				recurse(active+remaining[0][i], nextRemaining, storage);
			}
		}
		return storage;
	};
	return recurse([], letterArrays, []);
};

// for testing
lettersToPossibleWords([['a','b','c'],['d','e','f']]);

var combinations = function(vals=[]) {
	if (vals.length===0) return;
    var recurse = function(active=[], remaining=[], storage=[]) {
        if (active.length===0 && remaining.length===0) return;
		if (remaining.length===0) {
			storage.push(active);
        } else {
			var newActive=active.slice(0);
			newActive.push(remaining[0]);
            recurse(newActive, remaining.slice(1), storage);
			recurse(active, remaining.slice(1), storage);
        }
        return storage;
    };
    return recurse([], vals, []);
};

// for testing
combinations([1,2,3]);

var exactLength = function(input=[], n=0) {
	if (input.length===0 || n===0) return;
	var results=[];
	for (let i in input) {
		if (input[i].length===n) {
			results.push(input[i]);
		}
	}
	return results;
};

exactLength(combinations([1,2,3]), 2);
