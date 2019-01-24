var planFactory = function(){};
planFactory.prototype.createPlan = function(opt){
    var newPlan;
    if(opt.type === 'nom'){
        newPlan = nominas;
    } else if (opt.type === 'con') {
        newPlan = contabilidad;
    } else if (opt.type === 'aut') {
        newPlan = autonomos;
    }
    return new newPlan(opt);
};

var nominas = function(opt){
    this.type        = opt.type    || '';
    this.name        = opt.name    || '';
    this.des         = opt.des     || '';
    this.nominas     = opt.nominas || '';
}

var contabilidad = function(opt){
    this.type        = opt.type    || '';
    this.name        = opt.name    || '';
    this.des         = opt.des     || '';
    this.periodo     = opt.periodo || '';
}

var autonomos = function(opt){
    this.type    = opt.type || '';
    this.name    = opt.name || '';
    this.des     = opt.des  || '';
    this.cif     = opt.cif  || '';
}

var myPlan = new planFactory();
var optionsPlan = {
    type    : 'nom',
    name    : 'Nóminas - Pack Molón',
    des     : 'Este es el Pack Molón. El que más mola y esta es su descripción',
};
var myplan = myPlan.createPlan(optionsPlan);