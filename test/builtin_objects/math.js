describe('Math', function(){

	it('sin, cos and tan', function(){
		expect(Math.sinh(0)).toBe(0);
		expect(Math.cosh(0)).toBe(1);
		expect(Math.tanh(0)).toBe(0);
		expect(Math.asinh(0)).toBe(0);
		expect(Math.acosh(1)).toBe(0);
		expect(Math.atanh(0)).toBe(0);
	});

	it('sign and trunc', function(){
		// sign
		expect(Math.sign(7)).toBe(1);
		expect(Math.sign(0)).toBe(0);
		expect(Math.sign(-7)).toBe(-1);

		// truncate
		expect(Math.trunc(2.8)).toBe(2);	
		expect(Math.trunc(-2.8)).toBe(-2);	
		expect(Math.trunc(2)).toBe(2);		
	});

	it('logharithm', function(){
		// ln(e)
		expect(Math.log1p(9)).toBe(2.302585092994046);

		// log(10)
		expect(Math.log10(1000)).toBe(3);

		// log(2)			
		expect(Math.log2(16)).toBe(4);				
	});

	it('other methods', function(){
		// cubic root
		expect(Math.cbrt(8)).toBe(2);		
		
		// 32-used bits
		expect(Math.clz32(7)).toBe(29);		
		
		// e^35
		expect(Math.expm1(7)).toBe(1095.6331584284585);
		
		// hypotenuse
		expect(Math.hypot(3,4)).toBe(5);	

		// single precision float representation of a number
		expect(Math.fround(2.888)).toBe(2.888000011444092);
	});
	
});