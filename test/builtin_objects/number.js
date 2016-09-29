describe('Number', function(){

	it('binary number', function(){
		var bin = 0b1001;			// 1*8 + 1*1 = 9
		expect(bin).toBe(9);

		var bin = Number('0b1001');	// 1*8 + 1*1 = 9
		expect(bin).toBe(9);
	});

	it('octal number', function(){
		var octal = 071;			// 7*8 + 7*1 = 57
		expect(octal).toBe(57);

		var octal = 0o71;			// 7*8 + 7*1 = 57
		expect(octal).toBe(57);

		var octal = Number('0o71');	// 7*8 + 7*1 = 57
		expect(octal).toBe(57);
	});

	it('hexadecimal number', function(){
		var hexa = 0xA1;			// 10*16 + 1*1 = 161
		expect(hexa).toBe(161);

		var hexa = Number('0xA1');	// 10*16 + 1*1 = 161
		expect(hexa).toBe(161);
	});

	it('parseInt and parseFloat', function(){
		var parsedInt = Number.parseInt('3');
		expect(parsedInt).toBe(3);

		var parsedFloat = Number.parseFloat('3.9');
		expect(parsedFloat).toBe(3.9);
	});

	it('isFinite', function(){
		var globalString = isFinite('3');
		expect(globalString).toBe(true);

		var numberString = Number.isFinite('3');
		expect(numberString).toBe(false);

		var numberInt = Number.isFinite(3);
		expect(numberInt).toBe(true);
	});

	it('isNan', function(){
		var globalString = isNaN('Nan');
		expect(globalString).toBe(true);

		var numberString = Number.isNaN('Nan');
		expect(numberString).toBe(false);

		var numberNaN = Number.isNaN(NaN);
		expect(numberNaN).toBe(true);
	});

	it('isInteger', function(){
		expect(Number.isInteger(6)).toBe(true);
		expect(Number.isInteger(6.0)).toBe(true);
		expect(Number.isInteger(6.5)).toBe(false);
	});

	it('MIN_SAFE_INTEGER & MAX_SAFE_INTEGER', function(){
		expect(Number.MAX_SAFE_INTEGER).toBe(Math.pow(2,53)-1);
		expect(Number.MIN_SAFE_INTEGER).toBe((Math.pow(2,53)-1)*-1);
	});

	it('isSafeInteger', function(){
		let isSafeMax = Math.pow(2,53)-1;
		expect(Number.isSafeInteger(isSafeMax)).toBe(true);

		let isNotSafeMax = Math.pow(2,53);
		expect(Number.isSafeInteger(isNotSafeMax)).toBe(false);

		let isSafeMin = (Math.pow(2,53)-1)*-1;
		expect(Number.isSafeInteger(isSafeMin)).toBe(true);

		let isNotSafeMin = Math.pow(2,53)*-1;
		expect(Number.isSafeInteger(isNotSafeMin)).toBe(false);
	});
	
});