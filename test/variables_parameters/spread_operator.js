describe('spread operator', function(){

	it('pass an array to a function', function(){
		let foo = function(x,y,z){
			return x+y+z;
		}
		let bar = [1,2,3];
		expect(foo(...bar)).toBe(6);
	});

	it('concatenate multiple arrays', function(){
		let foo = [4, 5];
		let bar = [1, 2, 3, ...foo, 6, 7];
		expect(bar).toEqual([1, 2, 3, 4, 5, 6, 7]);
	});

});