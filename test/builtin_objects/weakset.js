describe('WeakSet', function(){

	it('size, entries, values, forEach and clear undefined', function(){
		var mySet = new WeakSet();
		expect(mySet.size).toBe(undefined);
		expect(mySet.entries).toBe(undefined);
		expect(mySet.values).toBe(undefined);
		expect(mySet.forEach).toBe(undefined);
		expect(mySet.clear).toBe(undefined);
	});

	it('add and has', function(){
		var mySet = new WeakSet();
		var item = {name: 'Jack'};
		mySet.add(item);
		expect(mySet.has(item)).toBe(true);
	});

	it('delete', function(){
		var mySet = new WeakSet();
		var item = {name: 'Jack'};
		mySet.add(item);
		mySet.delete(item);
		expect(mySet.has(item)).toBe(false);
	});
	
});