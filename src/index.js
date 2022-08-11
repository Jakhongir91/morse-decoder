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
		'.': '10',
		'-': '11',
	};

	let getMorseLetter = (char) => {
		for (let prop in MORSE_TABLE) {
			if (MORSE_TABLE[prop] === char) {
				return prop;
			}
		}

		return null;
	}

	return expr
		.split(' ')
		.map(word => word.split('')
			.map(char => getMorseLetter(char))
			.map(morseChar => morseChar
				.split('')
				.map(array => codes[array])
				.join('')
			)
			.map(word => '0'.repeat(10 - word.length) + word)
			.reduce((previousValue, word) => previousValue + word, ''))
		.join('**********');
}

module.exports = {
	decode
}