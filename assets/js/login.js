import { getAjax, postAjax } from './api-ajax.js';//import các hàm getAjax và postAjax từ file api-ajax.js

$(document).ready(function () {
    $("#loginBtn").click(function () {

        var username = $("#login-username").val();
        var password = $("#login-password").val();

        console.log(username, password);

        if (!username || !password) {
            swal("Failed", "Username and password are required!", "warning");
            return;
        }

        postAjax("user/login",
            {
                username: username,
                password: password
            },
        ).done(function (response) {
            // Khi gọi API thì kết quả sẽ trả ở đây
            var token = msg.data
            //check xem token tồn tại chưa và có rỗng hay không
            if (token != null && token != "") {
                swal("Success", "Login successfully!", "success") // xài thư viện sweetalert2 để hiển thị thông báo
                    .then(() => {
                        //lưu token bảo mật vào bộ nhớ của browser
                        localStorage.setItem("token", token)
                        //chuyển qua trang index.html
                        window.location.href = "index.html"
                    });
            }
        }).fail(function (jqXHR) {
            swal("Failed!", "Incorrect username or password!", "warning");
        })
    })

    $(document).ready(function () {
        $("#registerBtn").click(function () {
            var username = $("#register-username").val();
            var password = $("#register-password").val();
            var email = $("#register-email").val();
            var fullname = $("#register-fullname").val();
            var phoneNumber = $("#register-phone-number").val();

            if (password != repeatPassword) {
                swal("Error!", "Password are not the same!")
                return;
            }

            postAjax("user/register",
                {
                    username: username,
                    password: password,
                    email: email,
                    fullname: fullname,
                    phoneNumber: phoneNumber
                },
            ).done(function (msg) {
                swal("Success", "Register successfully!", "success")
                    .then(() => {
                        window.location.href = "login.html"
                    });
            })
                .fail(function () {
                    swal("Failed!", "Register failed!", "warning");
                });
        })
    })
})