describe('iterators', function(){

	class ArrayIterator {
		constructor(array){
			this._index = -1;
			this._array = array;
		}

		// next() return next element of the collection
		next() {
			this._index++;
			return {
				// done return true if the element is the last of the collection
				done: this._index >= this._array.length ? true : false,
				// value return the value of the current element
				value: this._array[this._index]
			}
		}
	}

	it('custom iterator', function(){
		let sum = 0;
		let numbers = [1,2,3,4];
		let iterator = new ArrayIterator(numbers);
		let next = iterator.next();
		while(!next.done){
			sum += next.value;
			next = iterator.next();
		}
		expect(sum).toBe(10);
	});

	it('"for of" on an array: iterator is native', function(){
		// array could be iterable withot custom iterator or values()
		let sum = 0;
		let numbers = [1,2,3,4];
		for(let i of numbers){
			sum += i;
		}
		expect(sum).toBe(10);
	});

	it('"for of" with custom iterator', function(){
		class CustomArray {
			constructor(){
				this._elements = [];
			}

			addElement(value){
				this._elements.push(value);
			}

			[Symbol.iterator]() {
				return new ArrayIterator(this._elements);
			}
		}

		let sum = 0;
		let numbers = new CustomArray();
		numbers.addElement(1);
		numbers.addElement(2);
		numbers.addElement(3);
		for(let value of numbers){
			sum += value;
		}
		expect(sum).toBe(6);
	});
});