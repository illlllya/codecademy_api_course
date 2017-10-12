// Drum Arrays
let kicks
let snares
let hiHats
let rideCymbals

function toggleDrum(instrument, idx) {

}

function clear(arrName) {
	arrName.forEach(function(item) {
		item = false;
	});

	return arrName;
};

function invert(arrName) {
	for (let i = 0; i < arrName.length; i++) {
		if (arrName[i] === true) {
			arrName[i] = false;
		} else if (arrName[i] === false) {
			arrName[i] = true;
		}
	}
}