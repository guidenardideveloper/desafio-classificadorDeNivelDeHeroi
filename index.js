// Desafio: classificador de nível de herói

let nameHeroe = "Jaspion";
let levelXP = 1000;

if (levelXP <= 1000) {
    console.log(`O Herói de nome ${nameHeroe} está no nível de Ferro`);
} else if (levelXP >= 1001 && levelXP < 2001) {
    console.log(`O Herói de nome ${nameHeroe} está no nível de Bronze`);
} else if (levelXP >= 2001 && levelXP <= 5000) {
    console.log(`O Herói de nome ${nameHeroe} está no nível de Prata`);
} else if (levelXP >= 6001 && levelXP <= 7000) {
    console.log(`O Herói de nome ${nameHeroe} está no nível de Ouro`);
} else if (levelXP >= 7001 && levelXP <= 8000) {
    console.log(`O Herói de nome ${nameHeroe} está no nível de Platina`);
} else if (levelXP >= 8001 && levelXP <= 9000) {
    console.log(`O Herói de nome ${nameHeroe} está no nível de Ascendente`);
} else if (levelXP >= 9001 && levelXP <= 10000) {
    console.log(`O Herói de nome ${nameHeroe} está no nível de Imortal`);
} else {
    console.log(`O Herói de nome ${nameHeroe} está no nível de Irradiante`);
}

