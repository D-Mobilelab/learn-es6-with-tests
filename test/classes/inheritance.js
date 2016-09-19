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