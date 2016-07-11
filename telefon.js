var Telefon = (function () {
    function Telefon(marka, cena, color) {
        this.marka = marka;
        this.cena = cena;
        this.color = color;
    }
    Telefon.prototype.printInfo = function () {
        console.log(this.marka + ": zostal jedynie kolor " + this.color + " ");
    };
    ;
    return Telefon;
}());
var telefon1 = new Telefon('ipad', 6, 'niebieski');
var telefon2 = new Telefon('samsung', 7, 'rozowy');
telefon1.printInfo();
telefon2.printInfo();
//# sourceMappingURL=telefon.js.map