var Telefon = (function () {
    function Telefon(marka, cena, color) {
        this.marka = marka;
        this.cena = cena;
        this.color = color;
    }
    Telefon.prototype.printInfo = function () {
        console.log(this.marka + ": zostal jedynie kolor " + this.color + " w cenie " + this.cena + " PLN");
        console.log("Cena wraz z gwarancja: " + this.calculateWarrantyCost());
    };
    ;
    Telefon.prototype.calculateWarrantyCost = function () {
        this.warrantyCost = ((this.cena) + (this.cena * 1 / 12)).toFixed(2);
        return this.warrantyCost;
    };
    return Telefon;
}());
var telefon1 = new Telefon('ipad', 20, 'niebieski').printInfo();
var telefon2 = new Telefon('samsung', 50, 'rozowy').printInfo();
//# sourceMappingURL=telefon.js.map