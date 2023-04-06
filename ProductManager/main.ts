import {Product} from "./Product";
import {ProductManager} from "./ProductManager";

let laptop = new Product('MSI', 17000000);
let mobile = new Product('Iphone', 32000000);

let productManager = new ProductManager();

productManager.addProduct(laptop);
productManager.addProduct(mobile);

console.table(productManager.getAll());