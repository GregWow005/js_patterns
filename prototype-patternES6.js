const car = {
    wheels_number :4,
    start(){
        return 'The car started';
    },
    stop(){
        return 'The car is stopped';
    }
};

//Create the object car
var attr = {
    'firstName': {
        value: "Virat", 
        writable: true, 
        enumerable: true
        },
    'lastName': {
        value: "Kohli",
        writable: true,
        enumerable: true
    }
};
var myCar = Object.create(car,attr);