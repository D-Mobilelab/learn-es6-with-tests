describe('Array', function(){

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