class BallFactory {
    constructor(){
        this.createBall = (type) => {
            let ball;
            if(type === "soccer"){
                ball = new SoccerBall();
            } 
            else if(type === "basket"){
                ball = new BasketBall();
            }
            ball.roll = function() {
                return `The ${this._type} is rolling.`;
            };
            return ball;
        };
    }
}


class SoccerBall {
    constructor(){
        this._type = 'Soccer';
        this._kick = function(){
            return 'You kicked the football.';
        };
    }
}

class BasketBall {
    constructor (){
        this._type = 'Basket';
        this._bounce = function(){
            return 'You Bounce de basketball';
        };
    }
}

//Example
var factory = new BallFactory();
var basket_ball = factory.createBall('basket');
var soccer_ball = factory.createBall('soccer');