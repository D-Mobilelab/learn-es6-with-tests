describe('generators', function(){
	it('generator with static values', function(){
		let generator = function*(){
			yield 1;
			yield 2;
			yield 3;
		}

		let sum = 0;
		let iterator = generator();
		let next = iterator.next();
		while(!next.done){
			sum += next.value;
			next = iterator.next();
		}
		expect(sum).toBe(6);
	});

	it('generator with dynamic values', function(){
		let generator = function*(array){
			for(let i=0; i < array.length; i++){
				yield array[i];
			}
		}

		let sum = 0;
		let iterator = generator([1,2,3]);
		let next = iterator.next();
		while(!next.done){
			sum += next.value;
			next = iterator.next();
		}
		expect(sum).toBe(6);
	});

	it('generator and "for of"', function(){
		let generator = function*(...values){
			for(let i=0; i < values.length; i++){
				yield values[i];
			}
		}

		let sum = 0;
		for(let n of generator(1,2,3)){
			sum += n;
		}
		expect(sum).toBe(6);
	});

	it('generator and "for of" with an object', function(){
		let generator = function*(object){
			let keys = Object.keys(object);
			for(let i=0; i < keys.length; i++){
				yield object[keys[i]];
			}
		}

		let sum = 0;
		for(let n of generator({a: 1, b: 2, c: 3})){
			sum += n;
		}
		expect(sum).toBe(6);
	});

	it('create a filter with a generator', function(){
		let positive = function*(elements){
			for(let elem of elements){
				if(elem > 0){
					yield elem;
				}
			}
		}

		let result = [];
		let numbers = [-2, 2, 0, 3, -1];
		for(let resultItem of positive(numbers)){
			result.push(resultItem);
		}
		expect(result).toEqual([2,3]);
	});

	it('create a custom filter with a generator, using arrow', function(){
		let filter = function*(elements, condition){
			for(let elem of elements){
				if(condition(elem)){
					yield elem;
				}
			}
		}

		let result = [];
		let numbers = [-2, 2, 0, 3, -1];
		for(let resultItem of filter(numbers, e => e<0)){
			result.push(resultItem);
		}
		expect(result).toEqual([-2,-1]);
	});
});