// function getRandomInt(value) {
//     return Math.random() < (value / 100);
// }

const getRandomInt = (value) => Math.random() < (value / 100);

const showInfo = function () {
    const message = `HP у ${this.name} ${this.hp}`
    console.log(message);
    console.log('=======================');
}

const modifyHealth = function () {
    const damage = this.str + this.weapon - Hero.defense;
    Dragon.hp -= damage;
    const message = `Дракон попал по герою, урон => ${damage}`  
    console.log(message); 
}

const attack = function () {

    if (getRandomInt(50)) {
    this.modifyHealth();
      Hero.showInfo();
      console.log('========================');
    } else {
        const message = `Герой ппромахнулся =() \n======================= `  
      console.log(message);  
    }
}


const sleep = function () {
    console.log('Дракон спить');
}