describe('Set', function() {

	it('creation', function(){
		var mySet = new Set();
		expect(mySet.size).toBe(0);
	});

	it('size and add', function(){
		var mySet = new Set();
		mySet.add('John Kennedy');
		expect(mySet.size).toBe(1);
	});

	it('has and use an object as key', function(){
		var mySet = new Set();
		var key = {};
		mySet.add(key);
		expect(mySet.has(key)).toBe(true);
	});

	it('constructor', function(){
		var mySet = new Set([1,'a',3]);
		expect(mySet.has(1)).toBe(true);
		expect(mySet.has(2)).toBe(false);
		expect(mySet.has('a')).toBe(true);
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
		mySet.add('a');
		var entries = mySet.entries();
		var first = entries.next().value;
		expect(first).toEqual(['a', 'a']);
	});

	it('values and iterator', function(){
		var mySet = new Set();
		mySet.add('a');
		var values = mySet.values();
		var first = values.next().value;
		expect(first).toBe('a');
	});

	it('duplicate a set', function(){
		var mySet = new Set();
		mySet.add('a');
		var mySet2 = new Set(mySet.values());
		expect(mySet2.has('a')).toBe(true);
	});
	
});