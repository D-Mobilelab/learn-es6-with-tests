describe('shorthands', function(){
    it('property with same name of value', function(){
        var name = 'Mario';
        var surname = 'Rossi';
        var person = {
            name,
            surname
        }
        expect(person.name).toBe(name);
    });

    it('new method', function(){
        var name = 'Mario';
        var person = {
            getName() {
                return name;
            }
        }
        expect(person.getName()).toBe(name);
    });

    it('custom property within a function', function(){
        var createObject = function(prop, value){
            return {
                [prop]:value
            }
        }
        var person = createObject('name', 'Mario');
        expect(person.name).toBe('Mario');
    });

    it('custom property within a function, with concatenation', function(){
        var createObject = function(prop, value){
            return {
                ['prop_' + prop]:value
            }
        }
        var person = createObject('name', 'Mario');
        expect(person.prop_name).toBe('Mario');
    });
});