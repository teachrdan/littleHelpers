/*jshint esversion: 6 */

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

// for testing
exactLength(combinations([1,2,3]), 2);
