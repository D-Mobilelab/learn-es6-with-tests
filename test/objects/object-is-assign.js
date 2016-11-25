describe('Object.is', function(){
    it('positive and negative zero', function(){
        expect(0 === -0).toBe(true);
        expect(Object.is(0, -0)).toBe(false);
    });

    it('NaN', function(){
        expect(NaN === NaN).toBe(false);
        expect(Object.is(NaN, NaN)).toBe(true);
    });
});

describe('Object.assign', function(){
    it('extend an object with an other object', function(){
        var cat = {
            meow: function(){
                return 'meow';
            }
        };
        var dog = {
            bau: function(){
                return 'bau';
            }
        };
        Object.assign(cat, dog);
        expect(cat.bau()).toBe('bau');
    });
});