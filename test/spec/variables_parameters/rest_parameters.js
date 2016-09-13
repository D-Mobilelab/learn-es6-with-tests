describe('rest parameters', function(){
	
	it('undefined number of arguments', function(){
		// OLD JAVASCRIPT
		// for(var i=0; i < arguments.length; i++)
		let foo = function(...values){
			let result = 0;
			for(let i=0; i < values.length; i++){
				result += values[i];
			}
			return result;
		}
		expect(foo(5,4,1)).toBe(10);
	});

	it('two arguments, one defined, one not', function(){
		let foo = function(name, ...values){
			let result = 0;
			for(let i=0; i < values.length; i++){
				result += values[i];
			}
			return result;
		}
		expect(foo("John", 5,4,1)).toBe(10);
	});

	it('undefined arguments is an array', function(){
		let foo = function(...values){
			return values;
		}
		expect(foo(5,4,1)).toEqual(jasmine.any(Array));
	});

});