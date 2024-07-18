import { getCartProductFromLS } from "./getCartProduct"

export const  updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    let productTax = document.querySelector(".productTax");
    

    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    }, initialValue)
    // console.log(totalProductPrice);

    productTax.textContent = `₹${(0.05*totalProductPrice).toFixed(2)}`;

    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${(totalProductPrice + (0.05*totalProductPrice)).toFixed(2)}`;
};