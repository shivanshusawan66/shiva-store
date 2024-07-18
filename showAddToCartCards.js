import { updateCartProductTotal } from "./updateCartProductTotal";
import { addToCart } from "./addToCart";
import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProduct";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});

// console.log(filterProducts);

// update the addToCart Page 

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector
("#productCartTemplate");

// console.log(templateContainer);

const showCartProduct  = () => {
    filterProducts.forEach((curProd) => {
        const {category, id, image, name, stock, price} = curProd;

        let productClone = document.importNode(templateContainer.content, true);

        const LSActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;


        productClone.querySelector(".productPrice").textContent = LSActualData.price; 
        productClone.querySelector(".productQuantity").textContent = LSActualData.quantity; 

        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);
        });

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProdFromCart(id));

        cartElement.appendChild(productClone);

    });
};

showCartProduct();

updateCartProductTotal();



