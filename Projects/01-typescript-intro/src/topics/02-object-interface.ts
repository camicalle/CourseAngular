const skills : string[] = ['Bash', 'Counter', 'Healing'];

//Una interface es una forma de definir una estructura de objeto.
//s como una plantilla que establece que propiedades y metodos
//debe tener un objeto.
interface Charaters {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //Opcional - No es necesario colocarlo en el objeto
    hometownTwo: string | undefined; // Tiene que especifica el tipop en el objeto
}

const strider: Charaters = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometownTwo: undefined,
}

strider.hometown = 'Rivendell';

console.table(strider);


export {};