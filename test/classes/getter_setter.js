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