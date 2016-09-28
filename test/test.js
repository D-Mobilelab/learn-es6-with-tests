describe('Numbers', function(){

	it('binary number', function(){
		var bin = 0b1001;			// 1*8 + 1*1 = 9
		expect(bin).toBe(9);

		var bin = Number("0b1001");	// 1*8 + 1*1 = 9
		expect(bin).toBe(9);
	});

	it('octal number', function(){
		var octal = 071;			// 7*8 + 7*1 = 57
		expect(octal).toBe(57);

		var octal = 0o71;			// 7*8 + 7*1 = 57
		expect(octal).toBe(57);

		var octal = Number("0o71");	// 7*8 + 7*1 = 57
		expect(octal).toBe(57);
	});

	it('hexadecimal number', function(){
		var hexa = 0xA1;			// 10*16 + 1*1 = 161
		expect(hexa).toBe(161);

		var hexa = Number("0xA1");	// 10*16 + 1*1 = 161
		expect(hexa).toBe(161);
	});

	it('parseInt and parseFloat', function(){
		var parsedInt = Number.parseInt("3");
		expect(parsedInt).toBe(3);

		var parsedFloat = Number.parseFloat("3.9");
		expect(parsedFloat).toBe(3.9);
	});

	it('isFinite', function(){
		var globalString = isFinite("3");
		expect(globalString).toBe(true);

		var numberString = Number.isFinite("3");
		expect(numberString).toBe(false);

		var numberInt = Number.isFinite(3);
		expect(numberInt).toBe(true);
	});

	it('isNan', function(){
		var globalString = isNaN("Nan");
		expect(globalString).toBe(true);

		var numberString = Number.isNaN("Nan");
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

describe('Math', function(){
	it('sin, cos and tan', function(){
		expect(Math.sinh(0)).toBe(0);
		expect(Math.cosh(0)).toBe(1);
		expect(Math.tanh(0)).toBe(0);
		expect(Math.asinh(0)).toBe(0);
		expect(Math.acosh(1)).toBe(0);
		expect(Math.atanh(0)).toBe(0);
	});

	it('sign and trunc', function(){
		// sign
		expect(Math.sign(7)).toBe(1);
		expect(Math.sign(0)).toBe(0);
		expect(Math.sign(-7)).toBe(-1);

		// truncate
		expect(Math.trunc(2.8)).toBe(2);	
		expect(Math.trunc(-2.8)).toBe(-2);	
		expect(Math.trunc(2)).toBe(2);		
	});

	it('logharithm', function(){
		// ln(e)
		expect(Math.log1p(9)).toBe(2.302585092994046);

		// log(10)
		expect(Math.log10(1000)).toBe(3);

		// log(2)			
		expect(Math.log2(16)).toBe(4);				
	});

	it('other methods', function(){
		// cubic root
		expect(Math.cbrt(8)).toBe(2);		
		
		// 32-used bits
		expect(Math.clz32(7)).toBe(29);		
		
		// e^35
		expect(Math.expm1(7)).toBe(1095.6331584284585);
		
		// hypotenuse
		expect(Math.hypot(3,4)).toBe(5);	

		// single precision float representation of a number
		expect(Math.fround(2.888)).toBe(2.888000011444092);
	});
});

describe('Arrays', function(){
	it('find', function(){
		var array = [-2, 0, 5, 3];
		var firstPos = array.find(number => number > 0);
		expect(firstPos).toBe(5);
	});

	it('findIndex', function(){
		var array = [-2, 0, 5, 3];
		var firstPos = array.findIndex(number => number > 0);
		expect(firstPos).toBe(2);
	});

	it('fill', function(){
		var array = [-2, 0, 5, 3];
		var filledArray = array.fill(7);
		expect(filledArray).toEqual([7,7,7,7]);
	
		// (replace, start, end+1)
		var array = [-2, 0, 5, 3];
		var filledArray = array.fill(7, 1, 3); 
		expect(filledArray).toEqual([-2,7,7,3]);
	});	

	describe('copyWithin', function(){
		var array;
		beforeEach(function(){
			array = [1, 2, 3, 4, 5];
		});

		it('without argument', function(){
			array.copyWithin(-2);
			expect(array).toEqual([1, 2, 3, 1, 2]);
		});

		it('with start index', function(){
			array.copyWithin(0, 3);
			expect(array).toEqual([4, 5, 3, 4, 5]);
		});

		it('with end index', function(){
			array.copyWithin(0, 3, 4);
			expect(array).toEqual([4, 2, 3, 4, 5]);
		});

		it('with negative arguments', function(){
			array.copyWithin(-2, -3, -1);
			expect(array).toEqual([1, 2, 3, 3, 4]);
		});
	});

	it('of', function(){
		var array = new Array(2);
		expect(array).toEqual([undefined, undefined]);

		var arrayOf = Array.of(2);
		expect(arrayOf).toEqual([2]);	
	});	

	it('entries', function(){
		var array = ['a', 'b', 'c'];
		var entries = array.entries();

		var element = entries.next().value;
		expect(element).toEqual([0, 'a']);
		element = entries.next().value;
		expect(element).toEqual([1, 'b']);
	});	

	it('entries', function(){
		var array = ['a', 'b', 'c'];
		var entries = array.entries();

		var element = entries.next().value;
		expect(element).toEqual([0, 'a']);
		element = entries.next().value;
		expect(element).toEqual([1, 'b']);
	});

	it('keys', function(){
		var array = ['John', 'Jack'];
		var keys = array.keys();
		var element = keys.next().value;
		expect(element).toBe(0);
	});
});

describe('Set', function() {
	it('creation', function(){
		var mySet = new Set();
		expect(mySet.size).toBe(0);
	});

	it('size and add', function(){
		var mySet = new Set();
		mySet.add("John Kennedy");
		expect(mySet.size).toBe(1);
	});

	it('has and use an object as key', function(){
		var mySet = new Set();
		var key = {};
		mySet.add(key);
		expect(mySet.has(key)).toBe(true);
	});

	it('constructor', function(){
		var mySet = new Set([1,"a",3]);
		expect(mySet.has(1)).toBe(true);
		expect(mySet.has(2)).toBe(false);
		expect(mySet.has("a")).toBe(true);
	});

	it('no duplicate items', function(){
		var mySet = new Set();
		mySet.add(1);
		mySet.add(1);
		expect(mySet.size).toBe(1);
	});

	it('clear', function(){
		var mySet = new Set();
		mySet.add(1);
		mySet.add(2);
		mySet.clear();
		expect(mySet.size).toBe(0);
	});

	it('delete', function(){
		var mySet = new Set();
		mySet.add(1);
		mySet.add(2);
		mySet.delete(2);
		expect(mySet.has(2)).toBe(false);
	});

	it('forEach', function(){
		var mySet = new Set([1,2,3]);
		var count = 0;
		mySet.forEach(item => count++);
		expect(count).toBe(3);
	});

	it('for of', function(){
		var mySet = new Set([1,2,3]);
		var count = 0;
		for(item of mySet){	count++; }
		expect(count).toBe(3);
	});

	it('entries and iterator', function(){
		var mySet = new Set();
		mySet.add("a");
		var entries = mySet.entries();
		var first = entries.next().value;
		expect(first).toEqual(["a", "a"]);
	});

	it('values and iterator', function(){
		var mySet = new Set();
		mySet.add("a");
		var values = mySet.values();
		var first = values.next().value;
		expect(first).toBe("a");
	});

	it('duplicate a set', function(){
		var mySet = new Set();
		mySet.add("a");
		var mySet2 = new Set(mySet.values());
		expect(mySet2.has("a")).toBe(true);
	});
});

describe('Maps', function(){
	it('creation', function(){
		var map = new Map();
		expect(map.size).toBe(0);
	});

	it('size and set', function(){
		var map = new Map();
		map.set("name", "John");
		expect(map.size).toBe(1);
	});

	it('get', function(){
		var map = new Map();
		map.set("name", "John");
		expect(map.get("name")).toBe("John");
	});

	it('object as key', function(){
		var map = new Map();
		var key = {"name": "John"};
		map.set(key, 10);
		expect(map.get(key)).toBe(10);
	});

	it('has', function(){
		var map = new Map();
		map.set("age", 10);
		expect(map.has("age")).toBe(true);
	});

	it('constructor', function(){
		var map = new Map([["name","John"], ["surname","Kennedy"]]);
		expect(map.get("surname")).toBe("Kennedy");
	});

	it('no duplicate keys', function(){
		var map = new Map();
		map.set("name", "Jack");
		map.set("name", "John");
		expect(map.get("name")).toBe("John");
	});

	it('clear', function(){
		var map = new Map();
		map.set("name", "Jack");
		map.set("surname", "Kenndy");
		map.clear();
		expect(map.size).toBe(0);
	});

	it('delete', function(){
		var map = new Map();
		map.set("name", "Jack");
		map.delete("name");
		expect(map.has("name")).toBe(false);
	});

	it('forEach', function(){
		var map = new Map();
		map.set("name", "Jack");
		map.set("surname", "Kenndy");
		var count = 0;
		map.forEach((value,key) => count++);
		expect(count).toBe(2);
	});

	it('for of', function(){
		var map = new Map();
		map.set("name", "Jack");
		map.set("surname", "Kenndy");
		var count = 0;
		for(var [key, value] of map){ count++; }
		expect(count).toBe(2);
	});

	it('entries and iterator', function(){
		var map = new Map();
		map.set("name", "Jack");
		var entries = map.entries();
		var first = entries.next().value;
		expect(first).toEqual(["name", "Jack"]);
	});

	it('keys and iterator', function(){
		var map = new Map();
		map.set("name", "Jack");
		var keys = map.keys();
		var first = keys.next().value;
		expect(first).toBe("name");
	});

	it('values and iterator', function(){
		var map = new Map();
		map.set("name", "Jack");
		var values = map.values();
		var first = values.next().value;
		expect(first).toBe("Jack");
	});

	it('duplicate a map', function(){
		var map = new Map();
		map.set("name", "Jack");
		var map2 = new Map(map.entries());
		expect(map2.size).toBe(1);
	});
});