import {
    getUserCartByUserID,
    getAddressByUserID,
    getUserDetail,
    createShopOrder
} from './fetch-api.js';//import các hàm getAjax và postAjax từ file api-ajax.js
$(document).ready(function () {
    let shippingAddressId;
    getUserCartByUserID().done(function (response) {
        let placeholder = document.querySelector("#cart-table");
        let out = "";
        let data = Array.isArray(response.data) ? response.data : [response.data];
        let subTotal = 0;
        let total = 0;
        if (data.length == 0) {
            window.location.href = "empty-cart.html";
        } else {
            for (let output of data) {
                subTotal += output.price * output.quantity;
                let product_total = output.price * output.quantity;
                out += `<tr>
                            <td> ${output.name} <strong> × ${output.quantity}</strong> Size : <strong>${output.size}</strong></td>
                            <td> $${product_total}.00</td>
                        </tr>`;
            }
            placeholder.innerHTML = out;
            document.querySelector('#checkout-subtotal').textContent = `$${subTotal}.00`;
            getAddressByUserID().done(function (response) {
                let data = response.data;
                total = subTotal + data[0].shippingFee;
                shippingAddressId = data[0].id;
                document.querySelector('#shipping-fee').textContent = `$${data[0].shippingFee}.00`;
                document.querySelector('#checkout-total').textContent = `$${total}.00`;
            });

        }
    })

    getUserDetail().done(function (response) {
        let data = response.data;
        console.log(data);
        if (data) {
            document.getElementsByName('phone')[0].value = data.phone;
            document.getElementsByName('email')[0].value = data.email;
            document.getElementsByName('fullName')[0].value = data.fullname;
        }
    });

    getAddressByUserID().done(function (response) {
        let data = response.data;
        if (data.length > 0) {
            let output = data[0]; // Use the first address data. Adjust this if needed.

            document.getElementsByName('companyName')[0].value = output.company;
            document.getElementsByName('country')[0].value = output.country;
            document.getElementsByName('streetAddress')[0].value = output.street_address;
            document.getElementsByName('townCity')[0].value = output.town_city;
            document.getElementsByName('stateCounty')[0].value = output.country;

        }
    });

    document.querySelector('#place-order').addEventListener('click', function (event) {
        event.preventDefault();
        let note = document.getElementById('order_note').value;
        let paymentMethodId = document.querySelector('input[name="paymentMethod"]:checked').value;
        createShopOrder(paymentMethodId, shippingAddressId, note).done(function (response) {
            console.log(response);
            if (response.data) {
                swal("Success!", "Order created successfully.", "success");
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 2000);
            } else {
                swal("Failed!", "Could not create order.", "warning");
            }
        });
    });
});