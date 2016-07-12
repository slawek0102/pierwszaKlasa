class Telefon {

    warrantyCost:string;

    constructor(private marka: string, private cena: number, private color: string) {
    }

    printInfo() {
        console.log(`${this.marka}: zostal jedynie kolor ${this.color} w cenie ${this.cena} PLN`);
        console.log(`Cena wraz z gwarancja: ${this.calculateWarrantyCost()}`);
    };

    private calculateWarrantyCost() {
        this.warrantyCost = ((this.cena) + (this.cena * 1 / 12)).toFixed(2);
        return this.warrantyCost;
    }
}

let telefon1 = new Telefon('ipad', 20, 'niebieski').printInfo();
let telefon2 = new Telefon('samsung', 50, 'rozowy').printInfo();


