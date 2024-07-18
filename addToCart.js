import { getCartProductFromLS } from "./getCartProduct";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";


export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartProductFromLS();
    const currentProdElem = document.querySelector(`#card${id}`);
    
    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    
    let price = currentProdElem.querySelector(".productPrice").innerText;
    price = price.replace("₹", "");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id ===  id);
    
    if(existingProd && quantity > 1 ){
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price*quantity);
        let updatedCart = {id, quantity, price};

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });
        // console.log(updateCart);
        localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));
        showToast("add", id);
    }

    if(existingProd){
        // alert('bhai duplicate h')
        return false;
    }


    price = Number(price * quantity);
    quantity = Number(quantity);
    
    
    let updateCart = {id, quantity, price};
    arrLocalStorageProduct.push({id, quantity, price});

    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

    showToast("add", id);

    //update the cart button value
    updateCartValue(arrLocalStorageProduct);

    showToast("add", id);
};