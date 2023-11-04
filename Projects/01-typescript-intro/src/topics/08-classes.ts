export class Person {
    //Property
    // public name: string;
    // private address: string;

    // constructor() {
    //     this.name = 'Fernando';
    //     this.address = 'New York';
    // }

    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }

    constructor( 
        public firstName: string, 
        public lastName: string,
        private address: string = 'No Address'
    ) {}
}

// const ironMan = new Person('Luis');
// const ironManTwo = new Person('Luis', 'Colombia');

// console.log(ironMan, ironManTwo);

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         // super()
//         super(realName, 'New York')
//     }
// }

// const ironman = new Hero('Ironman', 45, 'Tony');

// console.log(ironman);

export class Hero {   

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
    }
}

const tony = new Person('Tony', 'Stark' , 'New York')

const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);
