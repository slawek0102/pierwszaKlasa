class Telefon {

    constructor (private marka:string, private cena:number, private color:string){
    }

    printInfo(){
        console.log(`${this.marka}: zostal jedynie kolor ${this.color} `);
    };
}


var telefon1 = new Telefon('ipad', 6, 'niebieski');
var telefon2 = new Telefon('samsung',7, 'rozowy');

telefon1.printInfo();
telefon2.printInfo();