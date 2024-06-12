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
    getAttributeOption,
    addProductToCart
} from './fetch-api.js';//import các hàm getAjax và postAjax từ file api-ajax.js

$(document).ready(function () {
    getAllProduct().done(function (response) {
        getUserCartByUserID().done(function (response) {
            let placeholder = document.querySelector("#cart-table");
            let out = "";

            // Ensure the response data is treated as an array
            let data = Array.isArray(response.data) ? response.data : [response.data];
            let subTotal = 0; // Initialize a variable to store the total price of the cart items
            // Check if the cart is empty
            if (data.length == 0) {
                window.location.href = "emtycart.html";
            } else {
                // Loop through each item in the data array
                for (let output of data) {
                    subTotal += output.price * output.quantity; // Calculate the total price of the cart items
                    let cartTotal = output.price * output.quantity; // Calculate the total price of the cart item
                    // Append the HTML structure for each cart item to the output string
                    out += `<!-- Start Cart Single Item-->
                                        <tr productId="${output.id}">
                                            <td class="product_remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            <td class="product_thumb"><a href="product-details-default.html"><img src="${output.image}" alt=""></a></td>
                                            <td class="product_name"><a href="product-details-default.html">${output.name}</a></td>
                                            <td class="product-price">$${output.price}.00</td>
                                            <td class="product_quantity"><label>Quantity</label> <input min="1" max="100" value="${output.quantity}" type="number"></td>
                                            <td class="product_total">$${cartTotal}.00</td>
                                        </tr> <!-- End Cart Single Item-->
                                        <!-- Start Cart Single Item-->`;
                }
                placeholder.innerHTML = out; // Insert the built HTML into the cart-holder element
                document.querySelectorAll('.cart-subtotal').textContent = `$${subTotal}.00`; // Display the total price of the cart items

                // Attach the event listener for the delete buttons after the cart items are added to the DOM
                document.querySelectorAll('.offcanvas-wishlist-item-delete').forEach(function (deleteButton) {
                    deleteButton.addEventListener('click', function (event) {
                        event.preventDefault();
                        let productId = event.currentTarget.getAttribute('cart-id'); // Get the cart item ID
                        console.log(productId);
                        deleteUserCart(productId).done(function (response) { // Call function to delete cart item
                            if (response.data) {
                                calculateNumberCart();
                                event.target.closest('.offcanvas-wishlist-item-single').remove(); // Remove the item from the DOM
                            } else {
                                swal("Failed!", "Could not delete the item from the cart.", "warning");
                            }
                        });
                    });
                });
            }
        });
    });
});