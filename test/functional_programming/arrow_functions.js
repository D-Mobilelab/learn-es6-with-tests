describe('arrow functions', function(){

	/* OLD JAVASCRIPT
	var add = function(x,y){
		return x + y;
	}
	*/

	it('no arguments', function(){
		let add = () => 3;
		expect(add()).toBe(3);
	});

	it('one argument', function(){
		let add = x => x*x;
		expect(add(3)).toBe(9);
	});

	it('two or more arguments', function(){
		let add = (x,y) => x+y;
		expect(add(3,5)).toBe(8);
	});

	it('with parenthesis', function(){
		let add = (x,y) => {
			let temp = x*y;
			return temp+2;
		};
		expect(add(3,5)).toBe(17);
	});

	it('integrated with foreach', function(){
		let numbers = [1,2,3,4];
		let sum = 0;
		numbers.forEach(n => sum += n);
		expect(sum).toBe(10);
	});

	it('integrated with map', function(){
		let numbers = [1,2,3,4];
		let doubled = numbers.map(n => n+n);
		expect(doubled).toEqual([2,4,6,8]);
	});

	it('context of a function with and without arrows', function(done){
		this.name = "John";
		setTimeout(function(){
			expect(this.name).toBe("");
			done();
		}, 15);
	});

	it('context of a function with arrows', function(done){
		this.name = "John";
		setTimeout(() => {
			expect(this.name).toBe("John");
			done();
		}, 15);
	});

});