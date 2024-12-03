import {
    getUserOrder,
    getAddressByUserID,
    getUserDetail,
    updateUserDetail
} from './fetch-api.js';//import các hàm getAjax và postAjax từ file api-ajax.js
$(document).ready(function () {

    if(localStorage.getItem('token') == null)
        {
            window.location.href = "login.html"
    }
    document.querySelector('body').addEventListener('click', event => {

        /* get order onclick */
        if (event.target.matches('a[data-bs-toggle="tab"]')) {
            console.log('Orders tab clicked');
            getUserOrder().then(response => {
                if (!response.data) swal("Failed!", "Could not find order", "warning");
                let orderTable = document.querySelector('#order-table');
                let out = '';
                for (let i = 0; i < response.data.length; i++) {
                    let date = new Date(response.data[i].orderTime);
                    let formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
                        date.getDate().toString().padStart(2, '0') + '/' +
                        date.getFullYear();
                    out += `
                <tr>
                    <td>${response.data[i].id}</td>
                    <td>${formattedDate}</td>
                    <td>${response.data[i].status}</td>
                    <td>$${response.data[i].total_price}</td>
                    <td><a href="cart.html" class="view">view</a></td>
                </tr>
                    `;
                }
                orderTable.innerHTML = out;
            });

        }

        /* get address onclick */
        if (event.target.matches('a[data-bs-toggle="tab"]')) {
            getAddressByUserID().then(response => {
                if (!response.data) swal("Failed!", "Could not find address", "warning");

                let addressTable = document.querySelector('#address');
                let out = `<p>The following addresses will be used on the checkout page by default.</p>
                            <h5 class="billing-address">Billing address</h5>`;
                let data = Array.isArray(response.data) ? response.data : [response.data];

                console.log(data);

                for (let output of data) {
                    out += `
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview" addressId="${output.id}">Edit</a>
                            <address>
                                Street/Adress: ${output.street_address}<br>
                                Town/City: ${output.town_city} <br>
                                State/Province: ${output.id} <br>
                                Country: ${output.country}
                            </address>
                    `;
                }
                addressTable.innerHTML = out;
            });
        }

        /* get user detail onclick */
        if (event.target.matches('a[data-bs-toggle="tab"]')) {
            getUserDetail().then(response => {
                let data = response.data;

                let date = new Date(data.birthday);
                let formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
                    date.getDate().toString().padStart(2, '0') + '/' +
                    date.getFullYear();

                document.querySelector('input[name="full-name"]').value = data.fullname;
                document.querySelector('input[name="username"]').value = data.username;
                document.querySelector('input[name="email"]').value = data.email;
                document.querySelector('input[name="phone"]').value = data.phone;
                document.querySelector('input[name="birthday"]').value = data.formattedDate;
            });
        }

        /* update user detail onclick */
        if (event.target.matches('#acct-save-btn')) {
            let fullname = document.querySelector('input[name="full-name"]').value;
            let username = document.querySelector('input[name="username"]').value;
            let email = document.querySelector('input[name="email"]').value;
            let phone = document.querySelector('input[name="phone"]').value;
            let birthday = document.querySelector('input[name="birthday"]').value;
            let password = document.querySelector('input[name="user-password"]').value;
            let repeatepassword = document.querySelector('input[name="repeate-password"]').value;

            if (password !== repeatepassword) {
                swal("Failed!", "Password does not match", "warning");
                return;
            }

            let date = new Date(birthday);
            let formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
                date.getDate().toString().padStart(2, '0') + '/' +
                date.getFullYear();

            

            updateUserDetail(fullname,username,email,phone,formattedDate,password).then(response => {
                if (!response.data) swal("Failed!", "Could not update user", "warning");
                swal("Success!", "User updated", "success");
            });
        }

        /* logout */
        if (event.target.matches('#logout')) {
            event.preventDefault();
            localStorage.removeItem('token');
            window.location.href = 'login.html';
        }

    });


})


