import { findProductBySearch, getProductByCategory, addProductToCart } from './fetch-api.js';


var urlParams = new URLSearchParams(window.location.search);
var categoryId = urlParams.get('categoryId');
var search = urlParams.get('search');
$(document).ready(function () {
    // Fetch all products

    if (categoryId) {
        getProductByCategory(categoryId).done(function (response) {
            let gridView = document.querySelector("#product-grid-view"); //trỏ đến id của table
            let out = "";
            for (let output of response.data) {
                // duyệt và tạo ra các button để lọc sản phẩm theo category
                out += `<div class="product-default-single-item product-color--golden"
                                                        data-aos="fade-up" data-aos-delay="0">
                                                        <div class="image-box">
                                                            <a href="product-details-default.html" class="image-link">
                                                                <img src="${output.image[0]}"
                                                                    alt="">
                                                            </a>
                                                            <div class="action-link">
                                                                <div class="action-link-left">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalAddcart" id="add-to-cart-btn">Add to Cart</a>
                                                                </div>
                                                                <div class="action-link-right">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalQuickview"><i
                                                                            class="icon-magnifier" id="quick-view-icon"></i></a>
                                                                    <a href="wishlist.html"><i
                                                                            class="icon-heart" id= ""></i></a>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="content">
                                                            <div class="content-left">
                                                                <h6 class="title"><a
                                                                        href="product-details-default.html">${output.name}</a></h6>
                                                                <ul class="review-star">
                                                                    <li class="fill"><i class="ion-android-star"></i>
                                                                    </li>
                                                                    <li class="fill"><i class="ion-android-star"></i>
                                                                    </li>
                                                                    <li class="fill"><i class="ion-android-star"></i>
                                                                    </li>
                                                                    <li class="fill"><i class="ion-android-star"></i>
                                                                    </li>
                                                                    <li class="empty"><i class="ion-android-star"></i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="content-right">
                                                                <span class="price">$${output.priceMin} - ${output.priceMax}</span>
                                                            </div>

                                                        </div>
                                                    </div>
                `;
            }
            gridView.innerHTML = out; // add the generated HTML to the product table


            let listView = document.querySelector("#product-list-view"); //trỏ đến id của table
            out = "";
            for (let output of response.data) {
                // duyệt và tạo ra các button để lọc sản phẩm theo category
                out += `<div class="col-12" style="max-width: 900px; max-height: 300px; overflow: hidden;" >
                <div class="product-list-single product-color--golden">
                                                        <a href="product-details-default.html"
                                                            class="product-list-img-link">
                                                            <img class="img-fluid"
                                                                src="${output.image[0]}"
                                                                style="max-width: 100%; max-height: 100%; object-fit: cover;"
                                                                alt="">
                                                        </a>
                                                        <div class="product-list-content">
                                                            <h5 class="product-list-link"><a
                                                                    href="product-details-default.html">${output.name}</a></h5>
                                                            <ul class="review-star">
                                                                <li class="fill"><i class="ion-android-star"></i></li>
                                                                <li class="fill"><i class="ion-android-star"></i></li>
                                                                <li class="fill"><i class="ion-android-star"></i></li>
                                                                <li class="fill"><i class="ion-android-star"></i></li>
                                                                <li class="empty"><i class="ion-android-star"></i></li>
                                                            </ul>
                                                            <span class="product-list-price"><del>$${output.priceMin} - ${output.priceMax}</del>
                                                                $25.12</span>
                                                            <p>${output.shortDesc}</p>
                                                            <div class="product-action-icon-link-list">
                                                                <a href="#" data-bs-toggle="modal"
                                                                    data-bs-target="#modalAddcart"
                                                                    class="btn btn-lg btn-black-default-hover" id="add-to-cart-btn">Add to
                                                                    cart</a>
                                                                <a href="#" data-bs-toggle="modal"
                                                                    data-bs-target="#modalQuickview"
                                                                    id="quick-view-icon"
                                                                    class="btn btn-lg btn-black-default-hover"><i
                                                                        class="icon-magnifier"></i></a>
                                                                <a href="wishlist.html"
                                                                    class="btn btn-lg btn-black-default-hover"><i
                                                                        class="icon-heart"></i></a>
                                                                <a href="compare.html"
                                                                    class="btn btn-lg btn-black-default-hover"><i
                                                                        class="icon-shuffle"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                `;
            }
            listView.innerHTML = out; // add the generated HTML to the product table
            window.dispatchEvent(new Event('resize'));
        });
    }
    if (search) {
        findProductBySearch(search).done(function (response) {
            let gridView = document.querySelector("#product-grid-view"); //trỏ đến id của table
            let out = "";
            for (let output of response.data) {
                // duyệt và tạo ra các button để lọc sản phẩm theo category
                out += `<div class="product-default-single-item product-color--golden"
                                                        data-aos="fade-up" data-aos-delay="0">
                                                        <div class="image-box">
                                                            <a href="product-details-default.html" class="image-link">
                                                                <img src="${output.image[0]}"
                                                                    alt="">
                                                            </a>
                                                            <div class="action-link">
                                                                <div class="action-link-left">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalAddcart">Add to Cart</a>
                                                                </div>
                                                                <div class="action-link-right">
                                                                    <a href="#" data-bs-toggle="modal"
                                                                        data-bs-target="#modalQuickview"><i
                                                                            class="icon-magnifier"></i></a>
                                                                    <a href="wishlist.html"><i
                                                                            class="icon-heart"></i></a>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="content">
                                                            <div class="content-left">
                                                                <h6 class="title"><a
                                                                        href="product-details-default.html">${output.name}</a></h6>
                                                                <ul class="review-star">
                                                                    <li class="fill"><i class="ion-android-star"></i>
                                                                    </li>
                                                                    <li class="fill"><i class="ion-android-star"></i>
                                                                    </li>
                                                                    <li class="fill"><i class="ion-android-star"></i>
                                                                    </li>
                                                                    <li class="fill"><i class="ion-android-star"></i>
                                                                    </li>
                                                                    <li class="empty"><i class="ion-android-star"></i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="content-right">
                                                                <span class="price">$${output.priceMin} - ${output.priceMax}</span>
                                                            </div>

                                                        </div>
                                                    </div>
                `;
            }
            gridView.innerHTML = out; // add the generated HTML to the product table


            let listView = document.querySelector("#product-list-view"); //trỏ đến id của table
            out = "";
            for (let output of response.data) {
                // duyệt và tạo ra các button để lọc sản phẩm theo category
                out += `<div class="col-12" style="max-width: 900px; max-height: 300px; overflow: hidden;" >
                <div class="product-list-single product-color--golden">
                                                        <a href="product-details-default.html"
                                                            class="product-list-img-link">
                                                            <img class="img-fluid"
                                                                src="${output.image[0]}"
                                                                style="max-width: 100%; max-height: 100%; object-fit: cover;"
                                                                alt="">
                                                        </a>
                                                        <div class="product-list-content">
                                                            <h5 class="product-list-link"><a
                                                                    href="product-details-default.html">${output.name}</a></h5>
                                                            <ul class="review-star">
                                                                <li class="fill"><i class="ion-android-star"></i></li>
                                                                <li class="fill"><i class="ion-android-star"></i></li>
                                                                <li class="fill"><i class="ion-android-star"></i></li>
                                                                <li class="fill"><i class="ion-android-star"></i></li>
                                                                <li class="empty"><i class="ion-android-star"></i></li>
                                                            </ul>
                                                            <span class="product-list-price"><del>$${output.priceMin} - ${output.priceMax}</del>
                                                                $25.12</span>
                                                            <p>${output.shortDesc}</p>
                                                            <div class="product-action-icon-link-list">
                                                                <a href="#" data-bs-toggle="modal"
                                                                    data-bs-target="#modalAddcart"
                                                                    class="btn btn-lg btn-black-default-hover">Add to
                                                                    cart</a>
                                                                <a href="#" data-bs-toggle="modal"
                                                                    data-bs-target="#modalQuickview"
                                                                    class="btn btn-lg btn-black-default-hover"><i
                                                                        class="icon-magnifier"></i></a>
                                                                <a href="wishlist.html"
                                                                    class="btn btn-lg btn-black-default-hover"><i
                                                                        class="icon-heart"></i></a>
                                                                <a href="compare.html"
                                                                    class="btn btn-lg btn-black-default-hover"><i
                                                                        class="icon-shuffle"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                `;
            }
            listView.innerHTML = out; // add the generated HTML to the product table
        });
    }

    // Attach an event listener to the body element to listen for clicks on the add to cart button in the quick view modal
    document.querySelector('body').addEventListener('click', event => {
        if (event.target.matches('#add-to-cart-view-modal')) {
            event.preventDefault();
            const productId = event.target.closest('.modal-product-details-content-area').querySelector('.title').getAttribute('productid');
            const quantity = document.querySelector('#quick-view-quantity').value;
            const sizeId = document.querySelector('#quick-view-size + .nice-select .selected').getAttribute('data-value');
            console.log(productId, quantity, sizeId);
            addProductToCart(productId, sizeId, quantity).then(response => {
                if (!response.data) swal("Failed!", "Could not add the item to the cart.", "warning");
                calculateNumberCart();
            });
        }
    });

    // Attach an event listener to the body element to listen for clicks on the add to cart button
    document.querySelector('body').addEventListener('click', event => {
        if (event.target.matches('#add-to-cart-btn')) {
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
                `;
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
})