describe('Modules', function(){
    it('CommonJS pattern', function(){
        var person = require('./mock').person;
        expect(person.greetings('Mario')).toBe('Hello Mario');
    });
});