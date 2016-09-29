describe('WeakMap', function(){

	it('size, entries, values, keys, forEach and clear undefined', function(){
		var myMap = new WeakMap();
		expect(myMap.size).toBe(undefined);
		expect(myMap.entries).toBe(undefined);
		expect(myMap.values).toBe(undefined);
		expect(myMap.keys).toBe(undefined);
		expect(myMap.forEach).toBe(undefined);
		expect(myMap.clear).toBe(undefined);
	});

	it('set, has and get', function(){
		var myMap = new WeakMap();
		var key = {name: 'John'};
		myMap.set(key, 5);
		expect(myMap.has(key)).toBe(true);
		expect(myMap.get(key)).toBe(5);
	});

	it('delete', function(){
		var myMap = new WeakMap();
		var key = {name: 'John'};
		myMap.set(key, 5);
		myMap.delete(key);
		expect(myMap.has(key)).toBe(false);
	});
	
});