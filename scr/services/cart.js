// -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> remover um item do carrinho
async function removeItem(userCart, index) {
    
    //1. econtrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //2. Caso nao eonctre o item
    if(indexFound === -1){
        console.log("item nao encontrado");
        return;
    }

    //3. item > 1 subtrair 1 item, item = 1 , deve deletar o tem
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    //4. caso item = 1 deletar o item
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
        return;
    }



    
  
    
}

async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | Subtotal ${item.subtotal()} `
    );
  });
}

// -> calcular o total
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result);
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
