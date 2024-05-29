$(document).ready(function () {
    $("loginBtn").click(function () {

        var username = $("#login-username").val();
        var password = $("#login-password").val();

        if (!username || !password) {
            swal("Failed", "Username and password are required!", "warning");
            return;
        }

        $.ajax({
            type: "POST",
            url: "your-login-API",
            data: {
                username: username,
                password: password
            },
            success: function (response){
                var token = response.toke;
                window.location.href = "index.html";
            },
            error: function (xhr, status, error){
                swal("Failed", "Incorrect username or password!", "error");
            }
        });
    });

    $(document).ready(function() {
        $("#registerBtn").click(function () {
            var username = $("#register-username").val();
            var password = $("#register-password").val();
            var email = $("#register-email").val();
            var fullname = $("#register-fullname").val();
            var phoneNumber = $("#register-phone-number").val();

            if (!username || !password || !email || !fullname || !phoneNumber) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Failed',
                    text: 'All fields are required!'
                });
                return;
            }

            $.ajax({
                type: "POST",
                url: "your-register-API",
                data: {
                    username: username,
                    password: password,
                    email: email,
                    fullname: fullname,
                    phoneNumber: phoneNumber
                },
                success: function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Registration successful!'
                    });
                },
                error: function (xhr, status, error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed',
                        text: 'Registration failed!'
                    });
                }
            });
        });
    });
});