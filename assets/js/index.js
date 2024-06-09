import { getAllProduct, getFindUserWishlist } from './fetch-api.js';//import các hàm getAjax và postAjax từ file api-ajax.js
$(document).ready(function () {
    getAllProduct().done(function (response) {
        let placeholder = document.querySelector("#product-table"); //trỏ đến id của table
        let out = "";
        for (let output of response.data) {
            // duyệt và tạo ra các button để lọc sản phẩm theo category
            out += `<div class="product-default-single-item product-color--golden swiper-slide">
                                        <div class="image-box">
                                            <a href="product-details-default.html" class="image-link">
                                                <img src="assets/images/product/default/home-1/default-1.jpg" alt="">
                                            </a>
                                            <div class="tag">
                                                <span>sale</span>
                                            </div>
                                            <div class="action-link">
                                                <div class="action-link-left">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#modalAddcart">Add to Cart</a>
                                                </div>
                                                <div class="action-link-right">
                                                    <a href="#" data-bs-toggle="modal"
                                                        data-bs-target="#modalQuickview"><i
                                                            class="icon-magnifier"></i></a>
                                                    <a href="wishlist.html"><i class="icon-heart"></i></a>
                                                    <a href="compare.html"><i class="icon-shuffle"></i></a>
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

    document.addEventListener('DOMContentLoaded', function () {
        // Chọn phần tử có class offcanvas-toggle
        const offcanvasToggle = document.querySelector('.offcanvas-toggle');

        // Kiểm tra xem phần tử có tồn tại hay không
        if (offcanvasToggle) {
            // Thêm sự kiện lắng nghe click
            offcanvasToggle.addEventListener('click', function (event) {
                // Ngăn chặn hành vi mặc định của liên kết
                event.preventDefault();

                // Thực hiện hành động khi phần tử được click
                console.log('Offcanvas toggle was clicked!');

                // Ví dụ: Mở offcanvas wishlist hoặc thực hiện hành động khác
                // document.getElementById('offcanvas-wishlish').classList.toggle('open');
            });
        }
    });

    getFindUserWishlist().done(function (response) {
        let placeholder = document.querySelector();
        let out = "";
        for (let output of response.data) {
            out += `<div id="offcanvas-wishlish" class="offcanvas offcanvas-rightside offcanvas-add-cart-section">
        <!-- Start Offcanvas Header -->
        <div class="offcanvas-header text-right">
            <button class="offcanvas-close"><i class="ion-android-close"></i></button>
        </div> <!-- ENd Offcanvas Header -->

        <!-- Start Offcanvas Mobile Menu Wrapper -->
        <div class="offcanvas-wishlist-wrapper">
            <h4 class="offcanvas-title">Wishlist</h4>
            <ul class="offcanvas-wishlist">
                <li class="offcanvas-wishlist-item-single">
                    <div class="offcanvas-wishlist-item-block">
                        <a href="#" class="offcanvas-wishlist-item-image-link">
                            <img src="assets/images/product/default/home-1/default-1.jpg" alt=""
                                class="offcanvas-wishlist-image">
                        </a>
                        <div class="offcanvas-wishlist-item-content">
                            <a href="#" class="offcanvas-wishlist-item-link">${output.name}</a>
                            <div class="offcanvas-wishlist-item-details">
                                <span class="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span class="offcanvas-wishlist-item-details-price">$${output.priceMin}</span>
                            </div>
                        </div>
                    </div>
                    <div class="offcanvas-wishlist-item-delete text-right">
                        <a href="#" class="offcanvas-wishlist-item-delete"><i class="fa fa-trash-o"></i></a>
                    </div>
                </li>
            </ul>
            <ul class="offcanvas-wishlist-action-button">
                <li><a href="#" class="btn btn-block btn-golden">View wishlist</a></li>
            </ul>
        </div> <!-- End Offcanvas Mobile Menu Wrapper -->

    </div> <!-- End Offcanvas Mobile Menu Section -->`;
        }
        placeholder.innerHTML = out;
    });
});