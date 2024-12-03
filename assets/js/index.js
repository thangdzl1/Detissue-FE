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
    getSizeByProductId,
    addProductToCart
} from './fetch-api.js';//import các hàm getAjax và postAjax từ file api-ajax.js
$(document).ready(function () {
    getAllProduct().done(function (response) {
        let placeholder = document.querySelector("#product-table"); //trỏ đến id của table
        let out = "";
        for (let output of response.data) {
            // duyệt và tạo ra các button để lọc sản phẩm theo category
            out += `<div class="product-default-single-item product-color--golden swiper-slide">
                                        <div class="image-box" productId="${output.id}">
                                            <a href="product-details-default.html" class="image-link">
                                                <img src="${output.image[0]}" alt="">
                                            </a>
                                            <div class="tag">
                                                <span>sale</span>
                                            </div>
                                            <div class="action-link">
                                                <div class="action-link-left">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#modalAddcart" id ="add-to-cart-btn">Add to Cart</a>
                                                </div>
                                                <div class="action-link-right">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#modalQuickview"><i
                                                            class="icon-magnifier" id="quick-view-icon"></i></a>
                                                    <a href="#"><i class="icon-heart"></i></a>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <div class="content-left">
                                                <h6 class="title"><a href="product-details-default.html">${output.name}</a></h6>
                                                <ul class="review-star">
                                                    <li class="fill"><i class="ion-android-star"></i></li>
                                                    <li class="fill"><i class="ion-android-star"></i></li>
                                                    <li class="fill"><i class="ion-android-star"></i></li>
                                                    <li class="fill"><i class="ion-android-star"></i></li>
                                                    <li class="empty"><i class="ion-android-star"></i></li>
                                                </ul>
                                            </div>
                                            <div class="content-right">
                                                <span class="price">$${output.priceMin} - $${output.priceMax}</span>
                                            </div>

                                        </div>
                                    </div>
            `;
        }
        placeholder.innerHTML = out; // add the generated HTML to the product table
        window.dispatchEvent(new Event('resize'));
    });

    getProductByCategory(5).done(function (response) {
        let placeholder = document.querySelector("#best-seller"); //trỏ đến id của table
        let out = "";
        for (let output of response.data) {
            // duyệt và tạo ra các button để lọc sản phẩm theo category
            out += `<div class="product-default-single-item product-color--golden swiper-slide">
                                        <div class="image-box" productId="${output.id}">
                                            <a href="product-details-default.html" class="image-link">
                                                <img src="${output.image[0]}" alt="">
                                            </a>
                                            <div class="tag">
                                                <span>sale</span>
                                            </div>
                                            <div class="action-link">
                                                <div class="action-link-left">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#modalAddcart" id ="add-to-cart-btn">Add to Cart</a>
                                                </div>
                                                <div class="action-link-right">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#modalQuickview"><i
                                                            class="icon-magnifier" id="quick-view-icon"></i></a>
                                                    <a href="#"><i class="icon-heart"></i></a>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <div class="content-left">
                                                <h6 class="title"><a href="product-details-default.html">${output.name}</a></h6>
                                                <ul class="review-star">
                                                    <li class="fill"><i class="ion-android-star"></i></li>
                                                    <li class="fill"><i class="ion-android-star"></i></li>
                                                    <li class="fill"><i class="ion-android-star"></i></li>
                                                    <li class="fill"><i class="ion-android-star"></i></li>
                                                    <li class="empty"><i class="ion-android-star"></i></li>
                                                </ul>
                                            </div>
                                            <div class="content-right">
                                                <span class="price">$${output.priceMin} - $${output.priceMax}</span>
                                            </div>

                                        </div>
                                    </div>
            `;
        }
        placeholder.innerHTML = out; // add the generated HTML to the product table
    });

    document.querySelector('#show-wishlist-btn').addEventListener('click', function (event) {
        event.preventDefault();
        findUserWishlist().done(function (response) {
            let placeholder = document.querySelector("#wishlist-holder");
            let out = "";
            let data = Array.isArray(response.data) ? response.data : [response.data];
            if (data.length == 0) {
                out = `<li class="offcanvas-wishlist-item-single">
                    <p class="offcanvas-wishlist-item-empty">No items found in the wishlist.</p>`;
                placeholder.innerHTML = out;
            } else {
                for (let output of data) {
                    out += `<li class="offcanvas-wishlist-item-single">
                        <div class="offcanvas-wishlist-item-block">
                            <a href="#" class="offcanvas-wishlist-item-image-link">
                                <img src="${output.image[0]}" alt=""
                                    class="offcanvas-wishlist-image">
                            </a>
                            <div class="offcanvas-wishlist-item-content">
                                <a href="#" class="offcanvas-wishlist-item-link">${output.name}</a>
                                <div class="offcanvas-wishlist-item-details">
                                    <span class="offcanvas-wishlist-item-details-quantity">$${output.priceMin} - $${output.priceMax} </span>
                                </div>
                            </div>
                        </div>
                        <div class="offcanvas-wishlist-item-delete text-right" wishlist-id="${output.id}">
                            <a href="#" class="offcanvas-wishlist-item-delete"><i class="fa fa-trash-o"></i></a>
                        </div>
                    </li>`;
                }
                placeholder.innerHTML = out;

                // Attach the event listener here, after the wishlist items are added to the DOM
                document.querySelectorAll('.offcanvas-wishlist-item-delete').forEach(function (deleteButton) {
                    deleteButton.addEventListener('click', function (event) {
                        event.preventDefault();
                        let productId = event.currentTarget.getAttribute('wishlist-id');
                        calculateNumberWishlist();
                        deleteUserWishlist(productId).done(function (response) {
                            console.log(response.data);
                            if (response.data) {
                                event.target.closest('.offcanvas-wishlist-item-single').remove();
                                calculateNumberWishlist();
                            } else {
                                swal("Failed!", "Could not delete the item from the wishlist.", "warning");
                            }
                        });
                    });
                });
            }
        });
        calculateNumberWishlist();
    });

    // Attach an event listener to the element with ID 'show-cart-btn'
    document.querySelector('#show-cart-btn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the button click

        // Call the function to get the user cart by user ID
        getUserCartByUserID().done(function (response) {
            let placeholder = document.querySelector("#cart-holder"); // Select the cart holder element
            let out = ""; // Initialize an empty string to build the HTML output

            // Ensure the response data is treated as an array
            console.log(response.data)
            let data = Array.isArray(response.data) ? response.data : [response.data];
            let subTotal = 0; // Initialize a variable to store the total price of the cart items
            // Check if the cart is empty
            if (data.length == 0) {
                out = `<li class="offcanvas-wishlist-item-single">
                <p class="offcanvas-wishlist-item-empty">No items found in the cart.</p>
            </li>`;
                placeholder.innerHTML = out; // Display the message in the cart holder
            } else {
                // Loop through each item in the data array
                for (let output of data) {
                    subTotal += output.price * output.quantity; // Calculate the total price of the cart items
                    // Append the HTML structure for each cart item to the output string
                    out += `<li class="offcanvas-wishlist-item-single">
                    <div class="offcanvas-wishlist-item-block">
                        <a href="#" class="offcanvas-wishlist-item-image-link">
                            <img src="${output.image[0]}" alt=""
                                class="offcanvas-wishlist-image">
                        </a>
                        <div class="offcanvas-wishlist-item-content">
                            <a href="#" class="offcanvas-wishlist-item-link">${output.name}</a>
                            <div class="offcanvas-wishlist-item-details">
                                <span class="offcanvas-wishlist-item-details-quantity">${output.quantity} x $${output.price} </span>
                            </div>
                            <div class="offcanvas-wishlist-item-details">
                                <span class="offcanvas-wishlist-item-details-quantity">Size : ${output.size}</span>
                            </div>
                        </div>
                    </div>
                    <div class="offcanvas-wishlist-item-delete text-right" cart-id="${output.id}">
                        <a href="#" class="offcanvas-wishlist-item-delete"><i class="fa fa-trash-o"></i></a>
                    </div>
                </li>`;
                }
                placeholder.innerHTML = out; // Insert the built HTML into the cart-holder element
                document.querySelector('#cart-subtotal').textContent = `$${subTotal}.00`; // Display the total price of the cart items
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

    // Attach an event listener to the body element to listen for clicks on the heart icon
    document.querySelector('body').addEventListener('click', event => {
        if (event.target.matches('.icon-heart')) {
            event.preventDefault();
            const productId = event.target.closest('.image-box').getAttribute('productId');
            addUserWishlist(productId).then(response => {
                response.data ? swal("Success!", "Item added to wishlist.", "success") : swal("Could not add the item to the wishlist.");
            });
            calculateNumberWishlist();
        }
    });

    // Attach an event listener to the body element to listen for clicks on the quick view icon
    document.querySelector('body').addEventListener('click', event => {
        if (event.target.matches('#quick-view-icon')) {
            event.preventDefault();
            let productId = event.target.closest('.image-box').getAttribute('productId');

            let largeImagePlaceholder = document.querySelector("#quick-view-large-image"); //trỏ đến id của table
            let thumNailPlaceholder = document.querySelector("#quick-view-thumbnail"); //trỏ đến id của table
            let quickViewProduct = document.querySelector("#quick-view-product"); //trỏ đến id của table
            let quickViewSize = document.querySelector("#quick-view-size"); //trỏ đến id của table
            let quickViewDesc = document.querySelector("#quick-view-desc"); //trỏ đến id của table

            getProductById(productId).then(response => {
                let data = response.data;

                largeImagePlaceholder.innerHTML = ``;
                thumNailPlaceholder.innerHTML = ``;
                quickViewProduct.innerHTML = ``;
                quickViewSize.innerHTML = ``;
                quickViewDesc.innerHTML = ``;

                //Tạo large image
                for (let output of data.image) {
                    largeImagePlaceholder.innerHTML += `
                    <div class="product-image-thumb-single swiper-slide" >
                        <img class="img-fluid"
                            src="${output}" alt="">
                    </div>
                `;
                }
                //Tạo thumbnail
                for (let output of data.image) {
                    thumNailPlaceholder.innerHTML += `
                    <div class="product-image-large-image swiper-slide img-responsive">
                        <img src="${output}" alt="">
                    </div>
                `;window.dispatchEvent(new Event('resize'));
                }

                //Tạo thông tin sản phẩm
                quickViewProduct.innerHTML = `
                    <h4 class="title" productId="${data.id}">${data.name}</h4>
                    <div class="price">$${data.priceMin} - ${data.priceMax}</div>
                `
                //Tạo mô tả sản phẩm
                quickViewDesc.innerHTML = `
                    <p>${data.shortDesc}</p>
                `;
            });

            getSizeByProductId(productId).then(response => {
                let data = response.data;
                let out = `<option> size in option</option>`;
                for (let output of data) {
                    out += `<option value="${output.id}">${output.name}</option>`;
                }
                console.log(out);
                quickViewSize.innerHTML = out;
                $('#quick-view-size').niceSelect('update');
            });
        }

    });

    // Attach an event listener to the body element to listen for clicks on the add to cart button in the quick view modal
    document.querySelector('body').addEventListener('click', event => {
        if (event.target.matches('#add-to-cart-view-modal')) {
            if(localStorage.getItem('token') == null)
                {
                    window.location.href = "login.html"
            }
            event.preventDefault();
            const productId = event.target.closest('.modal-product-details-content-area').querySelector('.title').getAttribute('productid');
            const quantity = document.querySelector('#quick-view-quantity').value;
            const sizeId = document.querySelector('#quick-view-size + .nice-select .selected').getAttribute('data-value');
            console.log(productId, quantity, sizeId);
            addProductToCart(productId, sizeId, quantity).then(response => {
                if (!response.data) swal("Failed!", "Could not add the item to the cart.", "warning");
                calculateNumberCart();
                $('#modalAddcart').modal('hide');
                document.querySelector('#modalAddcart').hidden = true;
            });
        }
    });

    // Attach an event listener to the body element to listen for clicks on the add to cart button
    document.querySelector('body').addEventListener('click', event => {
        if (event.target.matches('#add-to-cart-btn')) {
            if(localStorage.getItem('token') == null)
                {
                    window.location.href = "login.html"
            }
            event.preventDefault();
            const productId = event.target.closest('.image-box').getAttribute('productId');
            const quantity = 1;
            const sizeId = 0;
            console.log(productId, quantity, sizeId);
            addProductToCart(productId, sizeId, quantity).then(response => {
                if (!response.data) swal("Failed!", "Could not add the item to the cart.", "warning");
                calculateNumberCart();
                
            });
        }
    });
});


function reinitSwiper(swiper) {
    setTimeout(function () {
        swiper.update();
    }, 1000);
}
