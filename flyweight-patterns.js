var provinces_ddbb = {
    'Madrid' : {
          'lat': 142,
          'lon': 123
    },
    'Barcelona' : {
          'lat': 242,
          'lon': 76
    },
    'Sevilla' : {
          'lat': 170,
          'lon': 78
    },
    'Valencia' : {
          'lat': 54,
          'lon': 225
    }
};

function Flyweight (prov,lat,lon) {
    this.prov = prov;
    this.lat  = lat;
    this.lon  = lon;
};
 
var FlyWeightFactory = (function (provinces) {
    var flyweights = {};
 
    return {
 
        get: function (prov) {
            if (!flyweights[prov]) {
                // voy la base de datos, y me traigo el solicitado
                console.log('DDBB: ');
                if(provinces[prov] !== undefined){
                    var this_prov = provinces[prov];
                    flyweights[prov] = new Flyweight(prov,this_prov.lat,this_prov.lon);
                } else {
                    console.log('NO EXISTE ESA PROVINCIA ');
                }
            }
            console.log('FLY: ');
            return flyweights[prov];
        },
        getAll : function(){
            return flyweights;
        },
        getCount: function () {
            var count = 0;
            for (var f in flyweights) count++;
            return count;
        }
    }
})(provinces_ddbb,undefined);


// Si solicitan una provincia y no esta cacheada se solicita a la BBDD y se guarda en el flyweight
// Si esta cacheada se devuelve la cacheada

var autonomies = (function(){
    var provinces = {};
    var getProvince = function(prov){
        var prov = FlyWeightFactory.get(prov);
        console.log('COMMENT: ', prov,FlyWeightFactory.getCount(),FlyWeightFactory.getAll());
    };
    return {
        getProvince         :   getProvince
    }
})();

// ────────────────────────────────────────────────────────────────────────────────
