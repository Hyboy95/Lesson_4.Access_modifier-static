import {Product} from "./Product";

// const formatter = new Intl.NumberFormat('vi-VN', {
//     style: 'currency',
//     currency: 'VND',
// });

export class ProductManager {
    private _products: Product[] = [];
    constructor() {}

    // getAll() {
    //     console.log(`Danh mục sản phẩm:`);
    //     this._products.forEach((product: Product) => {
    //         console.log(`- Sản phẩm ${product.getName()} có giá: ${formatter.format(product.getPrice())}`);
    //     });
    // }

    getAll() {
        return this._products;
    }

    addProduct(product: Product) {
        this._products.push(product);
    }
}