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

    $("#registerBtn").click(function () {

        var email = $("#register-email").val();
        var password = $("#register-password").val();

        if (!email || !password) {
            swal("Failed", "Email and password are required!", "warning");
            return;
        }

        $ajax({
            type: "POST",
            url: "your-register-API",
            date: {
                email: email,
                password: password
            },
            success: function (response) {
                swal("Success", "Registration succesful!", "Success");
            },
            error: function (xhr, status, error) {
                swal("Failed", "Registration failed!", "error");
            }
        });
    });
});
