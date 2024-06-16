import {
    getAllProduct,
    findUserWishlist,
    getUserCartByUserID,
    deleteUserWishlist,
    deleteUserCart,
    getProductById,
    getProductByCategory,
    addUserWishlist,
    getProductSkusByProductId,
    addProductToCart
} from './fetch-api.js';//import các hàm getAjax và postAjax từ file api-ajax.js

$(document).ready(function () {
    getUserCartByUserID().done(function (response) {
    let placeholder = document.querySelector("#cart-table");
    let out = "";
    let data = Array.isArray(response.data) ? response.data : [response.data];
    let subTotal = 0;
    if (data.length == 0) {
        window.location.href = "empty-cart.html";
    } else {
        for (let output of data) {
            subTotal += output.price * output.quantity;
            let cartTotal = output.price * output.quantity;
            out += `<tr productId="${output.id}">
                        <td class="product_remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                        <td class="product_thumb"><a href="product-details-default.html"><img src="${output.image[0]}" alt=""></a></td>
                        <td class="product_name"><a href="product-details-default.html">${output.name}</a></td>
                        <td class="product-price">$${output.price}.00</td>
                        <td class="product_quantity"><label>Quantity</label> <input min="1" max="100" value="${output.quantity}" type="number"></td>
                        <td class="product_total">$${cartTotal}.00</td>
                    </tr>`;
        }
        placeholder.innerHTML = out;
        document.querySelector('#checkout-subtotal').textContent = `$${subTotal}.00`;

        document.querySelectorAll('.product_remove').forEach(function (deleteButton) {
            deleteButton.addEventListener('click', function (event) {
                event.preventDefault();
                let productId = event.currentTarget.closest('tr').getAttribute('productId');
                console.log(productId);
                deleteUserCart(productId).done(function (response) {
                    if (response.data) {
                        event.target.closest('tr').remove();
                    } else {
                        swal("Failed!", "Could not delete the item from the cart.", "warning");
                    }
                });
            });
        });
    }
});
});