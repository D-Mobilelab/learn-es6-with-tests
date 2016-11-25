var person = function(name){
    this.name = name;
}
person.prototype = {
    greetings: function(){
        return 'hello ' + this.name;
    }
}

exports.person = person;