describe('Promises', function() {

	it('resolve returns data', function(done){
		var promise = new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve(3);
			}, 100);
		});
		promise.then(function(data){
			expect(data).toBe(3);
			done();
		});
	});

	it('reject returns data', function(done){
		var promise = new Promise(function(resolve, reject){
			setTimeout(function(){
				reject(new Error('syntax error'));
			}, 100);
		});
		promise.catch(function(error){
			expect(error.message).toBe('syntax error');
			done();
		});
	});

	it('promises can be concatened', function(done){
		var getName = new Promise(function(resolve, reject){
			resolve('Mario')
		});
		var getSurname = new Promise(function(resolve, reject){
			resolve('Rossi')
		});
		var getCity = new Promise(function(resolve, reject){
			resolve('Florence')
		});
		getName.then(function(name){
			expect(name).toBe('Mario');
			return getSurname;
		}).then(function(surname){
			expect(surname).toBe('Rossi');
			return getCity;
		}).then(function(city){
			expect(city).toBe('Florence');
			done();
		}).catch(function(error){
			// handle error of getName, getSurname or getCity
		});
	});

	it('execute code when all promises are resolved', function(done){
		var value = 0;
		var firstPromise = new Promise(function(resolve, reject){
			setTimeout(function(){
				value++;
				resolve();
			}, 500);
		});
		var secondPromise = new Promise(function(resolve, reject){
			setTimeout(function(){
				value++;
				resolve();
			}, 500);
		});
		Promise.all([firstPromise, secondPromise]).then(function(){
			expect(value).toBe(2);
			done();
		});
	});

	it('execute code when least one promise is resolved', function(done){
		var value = 0;
		var firstPromise = new Promise(function(resolve, reject){
			setTimeout(function(){
				value = 8;
				resolve();
			}, 800);
		});
		var secondPromise = new Promise(function(resolve, reject){
			setTimeout(function(){
				value = 5;
				resolve();
			}, 500);
		});
		Promise.race([firstPromise, secondPromise]).then(function(){
			expect(value).toBe(5);
			done();
		});
	})


});