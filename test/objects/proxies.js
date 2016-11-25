describe('Proxies', function(){
    var cat = {
        name: 'Fuffi',
        color: 'black',
        speak: function(subject){
            return 'meow ' + subject;
        }
    };

    it('intercept get method', function(){
        var proxyCat = new Proxy(cat, {
            get: function(object, property){
                if(property === 'name'){
                    return object[property] + ' Rossi';
                } else {
                    return object[property];
                }
            }
        });
        expect(proxyCat.name).toBe('Fuffi Rossi');
    });

    it('intercept set method', function(){
        var proxyCat = new Proxy(cat, {
            set: function(object, property, value){
                if(property === 'color'){
                    // color is not changeable
                    return false;
                } else {
                    object[property] = value;
                }
            }
        });
        proxyCat.name = 'Bobby';
        proxyCat.color = 'white';
        expect(proxyCat.name).toBe('Bobby');
        expect(proxyCat.color).toBe('black');
    });

    it('intercept a method of an object', function(){
        cat.meow = new Proxy(cat.speak, {
            apply: function(object, context, args){
                return object.apply(context, args) + ' meow';
            }
        });
        expect(cat.meow('fuffi')).toBe('meow fuffi meow');
    });
});