describe('default parameters', function(){

	it('only for undefined', function(){
		// OLD JAVASCRIPT
		// let foo = function(name){
		// 	name = name || "John";
		// 	return name;
		// }
		let foo = function(name='John'){
			return name;
		}
		expect(foo()).toBe('John');
		expect(foo('')).toBe('');
		expect(foo(null)).toBe(null);
		expect(foo(false)).toBe(false);
	});

	it('with destructuting of an array', function(){
		let foo = function(array=[1,2,3]){
			return array;
		}
		let [x,y,z] = foo();
		expect(x).toBe(1);
		expect(y).toBe(2);
		expect(z).toBe(3);
	});

	it('with destructuting of an object', function(){
		let foo = function(url, {data='John', cache=true}){
			return [data, cache];
		}
		let first = foo('urltest', { cache: false });
		expect(first[0]).toBe('John');
		expect(first[1]).toBe(false);
		let second = foo('urltest', { data: 'Mike' });
		expect(second[0]).toBe('Mike');
		expect(second[1]).toBe(true);
	});

});