describe('define a class', function () {

	/* OLD JAVASCRIPT
	var Car = function(){ ...constructor };
	Car.prototype = {
		isCar: function(){ return true; }
	};
	*/
	
	it('define a class and create an instance of this', function(){
		class Car {
			isCar() {
				return true;
			}
		}

		let alfaromeo = new Car();
		expect(alfaromeo.isCar()).toBe(true); 
	});


	it('use a constructor', function(){
		class Car {
			constructor(model) {
				this._model = model;
			}
			getModel() {
				return this._model;
			}
		}

		let alfaromeo = new Car('147');
		expect(alfaromeo.getModel()).toBe('147');
	});

});


describe('getter and setter', function(){
	it('private properties', function(){
		class Car {
			constructor(model) {
				this._model = model;
			}
		}

		let alfaromeo = new Car('147');
		expect(alfaromeo.model).toBe(undefined);
	});

	it('get and set a property', function(){
		class Car {
			constructor(model) {
				this._model = model;
			}
			get model() {
				return 'model: ' + this._model;
			}
			set model(value) {
				this._model = value + '.0';
			}
		}

		let alfaromeo = new Car('147');
		alfaromeo.model = '157';
		expect(alfaromeo.model).toBe('model: 157.0');
	});

	it('read-only property', function(){
		class Car {
			constructor(model) {
				this._model = '157';
			}
			get model() {
				return 'model: ' + this._model;
			}
		}

		let alfaromeo = new Car();
		alfaromeo.model = '147';
		expect(alfaromeo.model).toBe('model: 157');
	});
});


describe('inheritance', function(){

	it('inheritance and extension', function(){
	 	class Animal {
	 		constructor(name) {
	 			this._name = name;
	 		}

	 		get name() {
	 			return this._name;
	 		}

	 		set name(value) {
	 			this._name = value;
	 		}
	 	}

	 	class Cat extends Animal {
	 		greeting() {
	 			return "'Meow' said " + this._name;
	 		}
	 	};

	 	let anymal = new Animal("Anyname");
	 	let mycat = new Cat("Foffi");
	 	expect(anymal.name).toBe("Anyname");
	 	expect(mycat.name).toBe("Foffi");
	 	expect(mycat.greeting()).toBe("'Meow' said Foffi");
	});

	it('super class', function(){
		class Animal {
	 		constructor(name) {
	 			this._name = name;
	 		}

	 		get name() {
	 			return this._name;
	 		}

	 		set name(value) {
	 			this._name = value;
	 		}
	 	}

	 	class Cat extends Animal {
	 		constructor(name, color){
	 			super(name);
	 			this._color = color;
	 		}

	 		get color() {
	 			return this._color;
	 		}
	 	};

	 	let mycat = new Cat("Foffi", "gray");
	 	expect(mycat.color).toBe("gray");
	});
});

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