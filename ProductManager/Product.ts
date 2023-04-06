
export class Product {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }
    getName() {
        return this._name;
    }
    getPrice() {
        return this._price;
    }
    setName(name: string) {
        this._name = name;
    }
    setPrice(price: number) {
        this._price = price;
    }
}