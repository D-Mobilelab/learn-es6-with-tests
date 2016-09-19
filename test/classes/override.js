describe('overrides', function(){
	
	it('override a method', function(){
		class Animal {
			paws() {
				return 1;
			}
		}

		class Cat extends Animal {
			paws() {
				return 4;
			}
		}

		var anymal = new Animal();
		var mycat = new Cat();
		expect(anymal.paws()).toBe(1);
		expect(mycat.paws()).toBe(4);
	});

	it('override a method calling super method', function(){
		class Animal {
			paws() {
				return 1;
			}
		}

		class Cat extends Animal {
			paws() {
				return super.paws() + 4;
			}
		}

		var anymal = new Animal();
		var mycat = new Cat();
		expect(anymal.paws()).toBe(1);
		expect(mycat.paws()).toBe(5);
	});

	it('override a method of Object class', function(){
		class Animal {
			constructor(value){
				this._value = value;
			}

			toString() {
				return this._value;
			}
		}

		var anymal = new Animal('Anyname');
		// var mycat = new Cat('Foffi');
		expect(anymal.toString()).toBe('Anyname');
		// expect(mycat.paws()).toBe(5);
	});

	it('example with instanceOf method', function(){
		class Animal {
			paws() {
				return 1;
			}
		}

		class Cat extends Animal {
			paws() {
				return 4;
			}
		}

		let returnPaws = function(...elements){
			let results = [];
			for (var i = 0; i < elements.length; i++) {
				// Cat is an instance of Animal
				if(elements[i] instanceof Animal){	
					results.push(elements[i].paws());
				}
			}
			return results;
		}

		let returnPawsCat = function(...elements){
			let results = [];
			for (var i = 0; i < elements.length; i++) {
				// Animal is NOT an instance of Cat
				if(elements[i] instanceof Cat){	
					results.push(elements[i].paws());
				}
			}
			return results;
		}

		var anymal = new Animal();
		var mycat = new Cat();
		expect(returnPaws(anymal, mycat)).toEqual([1,4]);
		expect(returnPaws(anymal, mycat, {})).toEqual([1,4]);
		expect(returnPawsCat(anymal, mycat, {})).toEqual([4]);
	});
	
});