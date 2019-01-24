function Marca () {
    this.subscribers  = [];
    this.name = 'Marca';
};
Marca.prototype.addSubscriber = function(subscriber){
    this.subscribers.push(subscriber);
};
Marca.prototype.publish = function(data){
    var i = 0,
    len = this.subscribers.length;
    for (; i < len; i++) {
        this.subscribers[i].sendnews(data);
    }
};
Marca.prototype.getName = function(){
    return this.name;
};

Marca.prototype.getSubscribers = function(){
    var i = 0,
    len = this.subscribers.length;
    for (; i < len; i++) {
        console.log('COMMENT: ', this.subscribers[i]);
    }
};

function As () {
    this.subscribers  = [];
    this.name = 'As';
};
As.prototype.publish = function(data){
    var i = 0,
    len = this.subscribers.length;
    for (; i < len; i++) {
        this.subscribers[i](data);
    }
};
As.prototype.getName = function(){
    return this.name;
};


function Observer (){
    this.newspapers = {};
};
Observer.prototype.subscribe = function(newspaper){
    if (typeof this.newspapers[newspaper.getName()] === 'undefined') {
        this.newspapers[newspaper.getName()] = newspaper;
        console.log('COMMENT: ', this);
        newspaper.addSubscriber(this);
    } else {
        console.log('Uppps!, ya estas suscrito a este periodico');
    }
};
Observer.prototype.sendnews = function(data){
    console.log('NEWS: ', data);
};
Observer.prototype.unsubscribe = function(newspaper){
    if (typeof this.newspapers[newspaper.getName()] === 'undefined') {
        console.log('Uppps!, no estas suscrito a este periodico');
    } else {
        delete this.newspapers[newspaper.getName()];
    }
};
Observer.prototype.getNewsPapersLength = function(){
    return Object.keys(this.newspapers).length;;
};

Observer.prototype.getNewsPapers = function(){
    var i;
    for ( i in this.newspapers) {
        console.log('NEWSPAPERS: ', i);
    }
};


var a = new Observer();
var marca = new Marca();
a.subscribe(marca);
marca.publish({'sports':'CR7 = CR8'});


