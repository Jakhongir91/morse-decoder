const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let codes = {
		'10': '.',
		'11': '-',
	};

	return expr.split('**********') // Separate by spaces
		.map(function (word) { // Separate into Morse words
			let array = [];
			let i = 0;

			while (i + 10 <= word.length) {
				array.push(word.slice(i, i + 10));

				i += 10;
			}

			return array;
		})
		.map(function (words) {
			return words
				.map(function (letter) { // Separate into digital(0 and 1) letters
					let array = [];
					let i = 0;

					while (i + 2 <= 10) {
						array.push(letter.slice(i, i + 2));

						i += 2;
					}

					return array;
				})
				.map(letter => letter
					.filter(l => l !== '00') // Remove trailing 00 symbols
					.map(l => codes[l]) // Convert to Morse symbols
					.join('')) // Join Morse symbols to get Morse letters
				.map(morseLetter => MORSE_TABLE[morseLetter]) // Convert from Morse letters to normal letters
				.join(''); // Join normal letters together to get normal words
		}).join(' '); // Join words together with spaces between them
}

module.exports = {
	decode
}