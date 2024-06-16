import {
    getUserOrder,
    getAddressByUserID
} from './fetch-api.js';//import các hàm getAjax và postAjax từ file api-ajax.js
$(document).ready(function () {


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
                let out = '';
                let data = Array.isArray(response.data) ? response.data : [response.data];
                
                console.log(data);

                for (let output of data) {
                    out += `
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview" addressId="${output.id}">Edit</a>
                            <address>
                                isDefault : ${output.default}<br>
                                ${output.street_address} #1<br>
                                ${output.town_city} <br>
                                ${output.id} <br>
                            </address>
                            <p>${output.country}</p>
                    `;
                }
                addressTable.innerHTML += out;
            });
        }

        /* get user detail onclick */
        if (event.target.matches('a[data-bs-toggle="tab"]')) {
            getUserDetail(data).then(response => {
                data = response.data;
                document.querySelector('input[name="first-name"]').value = data.firstName;
                document.querySelector('input[name="last-name"]').value = data.lastName;
                document.querySelector('input[name="email-name"]').value = data.email;
                document.querySelector('input[name="user-password"]').value = data.password;
                document.querySelector('input[name="birthday"]').value = data.birthday;
                document.querySelector('#offer').checked = data.receiveOffers;
                document.querySelector('#newsletter').checked = data.newsletter;
            });
        }


        /* logout */
        if (event.target.matches('#logout')) {
            event.preventDefault();
            localStorage.removeItem('jwtToken');
            window.location.href = 'login.html';
        }

    });


})


