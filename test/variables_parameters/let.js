describe('let', function () {
	
	it('VAR is function-scope', function () {
    	var foo = function(value){
    		if(value){
    			var x = value;
    		}
    		return x;
    	}
    	var bar = function(){
    		for(var i=0; i<10; i++){}
    		return i;
    	}
    	expect(foo(3)).toBe(3);
    	expect(bar()).toBe(10);
	});

	it('LET is block-scope', function () {
		var foo = function(value){
			try {
	  			if(value){
	  				let x = value;
	  			}
	  			return x;
	  		} catch (error){
	  			return error + '';
	  		}
  		}
  		var bar = function(){
    		try {
    			for(let i=0; i<10; i++){}
    			return i;
    		} catch (error){
	  			return error + '';
	  		}
    	}
  		expect(foo(3)).toBe("ReferenceError: x is not defined");
  		expect(bar()).toBe("ReferenceError: i is not defined");
  	});

});