function Dictionary(params) {
    this.get = function (name) {
        return params[name];
    };
    this.set = function (name, value) {
        params[name] = value;
        return this;
    };
}


let users = new Dictionary({'john': 'admin'});

let johnRole = users.get('john');
users.set('mike', 'manager');
console.log(johnRole, users.get('mike'));


