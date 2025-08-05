import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const MyCart = [];
const MyWishList = [];

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwells lamborghini", 39.99, 1);

//adicionei 2 itens
await cartService.addItem(MyCart, item1);
await cartService.addItem(MyCart, item2);

await cartService.removeItem(MyCart, 0);

await cartService.displayCart(MyCart);




// //deletei 2 itens
// await cartService.deleteItem(MyCart, item2.name);
// await cartService.deleteItem(MyCart, item1.name);




//calculei o total
console.log(" ");
console.log("\n Shopee Cart Total is:");
await cartService.calculateTotal(MyCart);