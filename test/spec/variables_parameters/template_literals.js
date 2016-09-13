describe('template literals', function(){

	it('with back tick, you can concatenate strings', function(){
		let firstName = 'John';
		let secondName = 'Kennedy';
		let greeting = `Hello ${firstName} ${secondName}`;
		expect(greeting).toBe('Hello John Kennedy');
	});

	it('calculate operation', function(){
		let x = 2;
		let y = 3;
		let string = `${x} + ${y} = ${x+y}`;
		expect(string).toBe('2 + 3 = 5');
	});

	it('use tags', function(){
		let upper = function(strings, ...values){
			// strings = ['', ' piu ', ' fa ', ''];
			// values = [2,3,5];
			let result = "";
			for(let i=0; i < strings.length; i++){
				result += strings[i].toUpperCase();
				if(i < values.length){
					result += values[i];
				}
			}
			return result;
		}
		let x = 2;
		let y = 3;
		let string = upper `${x} piu ${y} fa ${x+y}`;
		expect(string).toBe('2 PIU 3 FA 5');
	});

});