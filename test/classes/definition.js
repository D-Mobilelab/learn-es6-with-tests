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