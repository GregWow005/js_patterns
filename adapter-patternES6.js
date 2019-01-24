class OldCalculator {
    constructor(){
        this.operation = (term1,term2,operation) => {
            switch (operation) {
                case 'add':
                    return term1 + term2;
                case 'sub':
                    return term1 - term2;
                default:
                    return NaN;
            }
        }
    }
}

class NewCalculator {
    constructor(){
        this.add  = (term1, term2) => {
            return term1 + term2; 
        };
        this.substract = (term1, term2) => {
            return term1 - term2;
        };
    }
}

class CalcAdapter {
    constructor(){
        const calc = new NewCalculator();
        this.operations = (term1, term2, operation) => {
            switch (operation) {
                case 'add':
                    // using the new implementation under the hood
                    return newCalc.add(term1, term2);
                case 'sub':
                    return newCalc.sub(term1, term2);
                default:
                    return NaN;
            }
        };
    }
}

// usage
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add')); // 15

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); // 15

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 5, 'add')); // 15;