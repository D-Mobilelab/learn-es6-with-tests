describe('Maps', function(){
	
	it('creation', function(){
		var map = new Map();
		expect(map.size).toBe(0);
	});

	it('size and set', function(){
		var map = new Map();
		map.set('name', 'John');
		expect(map.size).toBe(1);
	});

	it('get', function(){
		var map = new Map();
		map.set('name', 'John');
		expect(map.get('name')).toBe('John');
	});

	it('object as key', function(){
		var map = new Map();
		var key = {'name': 'John'};
		map.set(key, 10);
		expect(map.get(key)).toBe(10);
	});

	it('has', function(){
		var map = new Map();
		map.set('age', 10);
		expect(map.has('age')).toBe(true);
	});

	it('constructor', function(){
		var map = new Map([['name','John'], ['surname','Kennedy']]);
		expect(map.get('surname')).toBe('Kennedy');
	});

	it('no duplicate keys', function(){
		var map = new Map();
		map.set('name', 'Jack');
		map.set('name', 'John');
		expect(map.get('name')).toBe('John');
	});

	it('clear', function(){
		var map = new Map();
		map.set('name', 'Jack');
		map.set('surname', 'Kenndy');
		map.clear();
		expect(map.size).toBe(0);
	});

	it('delete', function(){
		var map = new Map();
		map.set('name', 'Jack');
		map.delete('name');
		expect(map.has('name')).toBe(false);
	});

	it('forEach', function(){
		var map = new Map();
		map.set('name', 'Jack');
		map.set('surname', 'Kenndy');
		var count = 0;
		map.forEach((value,key) => count++);
		expect(count).toBe(2);
	});

	it('for of', function(){
		var map = new Map();
		map.set('name', 'Jack');
		map.set('surname', 'Kenndy');
		var count = 0;
		for(var [key, value] of map){ count++; }
		expect(count).toBe(2);
	});

	it('entries and iterator', function(){
		var map = new Map();
		map.set('name', 'Jack');
		var entries = map.entries();
		var first = entries.next().value;
		expect(first).toEqual(['name', 'Jack']);
	});

	it('keys and iterator', function(){
		var map = new Map();
		map.set('name', 'Jack');
		var keys = map.keys();
		var first = keys.next().value;
		expect(first).toBe('name');
	});

	it('values and iterator', function(){
		var map = new Map();
		map.set('name', 'Jack');
		var values = map.values();
		var first = values.next().value;
		expect(first).toBe('Jack');
	});

	it('duplicate a map', function(){
		var map = new Map();
		map.set('name', 'Jack');
		var map2 = new Map(map.entries());
		expect(map2.size).toBe(1);
	});
	
});