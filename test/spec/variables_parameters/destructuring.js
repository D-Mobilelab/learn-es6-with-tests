describe('destructuting', function () {
	
	it('inverse variables', function () {
		let x = 4;
		let y = 5;
		[x, y] = [y, x];
  		expect(x).toBe(5);
  		expect(y).toBe(4);
  	});

  	it("assigning", function () {
		let [x, y] = [5, 4];
  		expect(x).toBe(5);
  		expect(y).toBe(4);
  	});

  	it("assigning, get from a function", function () {
		var foo = function(){
			return [5, 4];
		};
		let [x, y] = foo();
  		expect(x).toBe(5);
  		expect(y).toBe(4);
  	});

  	it("assigning, skipping a value", function () {
		let [x, , y] = [5, 2, 4];
  		expect(x).toBe(5);
  		expect(y).toBe(4);
  	});

  	it("object", function () {
		let { 
			firstName: firstName,
			secondName: secondName
		} = {
			firstName: 'John',
			secondName: 'Kennedy'
		};
  		expect(firstName).toBe('John');
  	});

  	it("object with different attributes", function () {
		let { 
			firstName: name,
			secondName: surname
		} = {
			firstName: 'John',
			secondName: 'Kennedy'
		};
  		expect(name).toBe('John');
  	});

  	it("object with subtree", function () {
		let { 
			social: {
				twitter: twitterProfile
			}
		} = {
			social: {
				twitter: 'mood'
			}
		};
  		expect(twitterProfile).toBe('mood');
  	});

  	it("object with same names", function () {
		let { 
			firstName,
			secondName
		} = {
			firstName: 'John',
			secondName: 'Kennedy'
		};
  		expect(firstName).toBe('John');
  	});

  	it("function arguments", function () {
		// OLD JAVASCRIPT
		// let foo = function(url, config){
		// 	return config.data;
		// }
		let foo = function(url, {data, cache}){
			return data;
		};
		let ajaxCall = foo('urltest', {
			data: 'test',
			cache: false
		});
		expect(ajaxCall).toBe('test');
  	});

});