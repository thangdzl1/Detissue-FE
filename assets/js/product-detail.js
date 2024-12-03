import { getProductById } from './fetch-api.js';


var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get('productId');
$(document).ready(function () {
    // Fetch all products

    if (productId) {
        let largeImagePlaceholder = document.querySelector("#product-large-image"); //trỏ đến id của table
        let thumNailPlaceholder = document.querySelector("#product-view-thumbnail"); //trỏ đến id của table
        let productPrice = document.querySelector("#product-price"); //trỏ đến id của table
        let productSize = document.querySelector("#product-view-size"); //trỏ đến id của table
        let productDesc = document.querySelector("#product-view-desc"); //trỏ đến id của table

        getProductById(productId).then(response => {
            let data = response.data;
            console.log(data)

            largeImagePlaceholder.innerHTML = ``;
            thumNailPlaceholder.innerHTML = ``;
            productPrice.innerHTML = ``;
            productSize.innerHTML = ``;
            productDesc.innerHTML = ``;

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
                `; window.dispatchEvent(new Event('resize'));
            }

            //Tạo thông tin sản phẩm
            productPrice.innerHTML = `
                    <h4 class="title" productId="${data.id}">${data.name}</h4>
                    <div class="price">$${data.priceMin} - ${data.priceMax}</div>
                `
            //Tạo mô tả sản phẩm
            productDesc.innerHTML = `
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
            productSize.innerHTML = out;
            $('#quick-view-size').niceSelect('update');
        });
    }
})