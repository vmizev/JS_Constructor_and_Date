// Задача 1

function Car(brand = "unknown brand", age = 0) {
	this.brand = brand;
	this.age = age;

	this.getCarBrand = function () {
		return this.brand[0].toUpperCase() + this.brand.substring(1);
	}

	this.getProductionYear = function() {
		let currentYear = new Date().getFullYear();
		return currentYear - age;
	}
}

let audi = new Car("audi A3", 5);

console.log("Марка авто: ", audi.getCarBrand());
console.log("Год выпуска: ", audi.getProductionYear());

// Задача 2
function Encrypt(text="") {  
	let str = text,
		encryptedStr = "";

	this.getDefaultText = function () {
		return str;
	};

	this.getEncryptedText = function () {
		for (let i = 0, maxValue = str.length; i < maxValue; i++) {
			encryptedStr += str.charCodeAt(i) + " ";
		}
		return encryptedStr;
	};

	this.clearString = function () {
		str = "";
		encryptedStr = "";
	};
}

let encryptStr = new Encrypt("Encrypt me!");
let encryptStr2 = new Encrypt("Encrypt me again!");

console.log("");
console.log("Исходная строка 1: ", encryptStr.getDefaultText());
console.log("Зашифрованная строка 1: ", encryptStr.getEncryptedText());
console.log("Исходная строка 2: ", encryptStr2.getDefaultText());
console.log("Зашифрованная строка 2: ", encryptStr2.getEncryptedText());
encryptStr.clearString();
encryptStr2.clearString();
console.log("Данные удалены!");
console.log("Исходная строка 1: ", encryptStr.getDefaultText());
console.log("Зашифрованная строка 1: ", encryptStr.getEncryptedText());
console.log("Исходная строка 2: ", encryptStr2.getDefaultText());
console.log("Зашифрованная строка 2: ", encryptStr2.getEncryptedText());



// Задача 3
function classString(text) {
	var defaultText = text;

	this.string = defaultText;

	this.getString = function () {
		return this.string;
	};

	this.setString = function (newString) {
		return this.string = newString;
	};

	this.getStringLength = function () {
		return this.string.length;
	};

	this.toString = function () {
		return this.getString();
	};

	this.valueOf = function () {
		return this.getStringLength();
	};
}

let str = new classString("First string");

console.log("");
console.log("str.string:", str.string);
console.log("str.getString():", str.getString());
console.log("str.getStringLength():", str.getStringLength());
console.log("str.valueOf():", str.valueOf());
console.log("Number(str):", Number(str));
console.log("+str:", +str);
console.log("str.toString():", str.toString());
console.log("str.setString('qwerty'):", str.setString("New string"));
console.log("str.string:", str.string);
console.log("str.getStringLength():", str.getStringLength());
console.log("str.valueOf():", str.valueOf());
console.log("Number(str):", Number(str));
console.log("+str:", +str);
console.log("str.toString():", str.toString());

// Date
// Задача 1
function firstDayOfTheYear(year) {
	let day = new Date(year, 0).getDay();
	let dayOfTheWeek = ['воскресенье',
						'понедельник',
						'вторник',
						'среда',
						'четверг',
						'пятница',
						'суббота'
	];
	return dayOfTheWeek[day];
}
console.log('');
console.log('Первый день года:', firstDayOfTheYear(1986));

// Задача 2
function getDayRus(dateStr) {
	let dateArr = dateStr.split('.');
	
	let day = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]).getDay();

	let dayOfTheWeek = ['воскресенье',
					'понедельник',
					'вторник',
					'среда',
					'четверг',
					'пятница',
					'суббота'
	];

	return dayOfTheWeek[day];
}

console.log('');
console.log('День недели в русском формате:', getDayRus('30.12.1986'));

// Задача 3
let newYear = new Date(2017, 0, 1).getTime();
let current = Date.now();
let numberOfWeeks = (current - newYear) / 1000 / 60 / 60 / 24 / 7 ;
numberOfWeeks = Math.round(numberOfWeeks);

console.log('');
console.log(`С нового года прошло ${numberOfWeeks} полных недели!`);