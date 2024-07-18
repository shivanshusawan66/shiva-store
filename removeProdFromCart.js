import { getCartProductFromLS } from "./getCartProduct"
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    // update the localStorage after removing the item 
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    //to remove the div product
    let removeDiv  = document.getElementById(`card${id}`);
    if(removeDiv) {
        removeDiv.remove();

        // show toast when product is addeed ot cart 
        showToast("delete", id);
    }

    updateCartValue(cartProducts);
    updateCartProductTotal();
};