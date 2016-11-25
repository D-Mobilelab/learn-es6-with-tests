describe('Async Generators', function(){
	it('async with yield and generators', function(done){
		var async = {
			sequence: null,
			run: function(generator){
				async.sequence = generator();
				let next = async.sequence.next();
			},
			resume: function(){
				async.sequence.next();
			},
			pause: function(ms){
				setTimeout(function(){
					console.log("pause for " + ms + " ms");
					async.resume();
				}, ms);
			}
		}

		function* main(){
			console.log('start');
			yield async.pause(200);
			console.log('middle');
			yield async.pause(200);
			console.log('end');
			expect(true).toBe(true);		
			done();	
		}

		async.run(main);
	});
});