function addNumber(a: number, b: number) {
    return a + b;
}
const result: number = addNumber(1,2)
console.log({ result });

//Funciones Flechas
const addNumbersArrow = (a: number, b: number): number => {
    return a + b;
}
const addNumbersArrowTwo = (a: number, b: number): string => {
    return `${a + b}`;
}

const resultTwo: number = addNumbersArrow(1,2);
const resultThree: string = addNumbersArrowTwo(1,2);
console.log({resultTwo, resultThree});

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}
const resultMultiply: number = multiply(5);
console.log({resultMultiply});


interface Charater {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (charater: Charater, amount: number) => {
    charater.hp += amount;
}

const strider: Charater = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);        
    }
}

healCharacter(strider, 10);
healCharacter(strider, 50);
strider.showHp();



export {};