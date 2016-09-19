describe('const', function () {
	
	it('CONST is block-scope', function () {
		var foo = function(value){
			try {
	  			if(value){
	  				const x = value;
	  			}
	  			return x;
	  		} catch (error){
	  			return error + '';
	  		}
  		}
  		expect(foo(3)).toBe("ReferenceError: x is not defined");
  	});


  	it('CONST cannot change', function () {
		var foo = function(value){
			try {
	  			const x = 5;
	  			x = value;
	  			return x;
	  		} catch (error){
	  			return error + '';
	  		}
  		}
  		expect(foo(3)).toBe("TypeError: Assignment to constant variable.");
  	});

});