// login
function login() {
    var email = document.getElementById("email").value;
    var pass  = document.getElementById("password").value;
    var error = document.getElementById("error");
    
    if(email == "admin@mail.com" && pass == "123123") {
        window.location = "../halaman-admin/halaman-admin-penjual.html"
    } else if(email == "pembeli@mail.com" && pass == "123123") {
        window.location = "../halaman-utama/halaman-utama.html"
    } else if(email == "penjual@mail.com" && pass == "123123") {
        window.location = "../halaman-penjual/desc-penjual.html"
    } else {
        error.innerText = "email atau password salah!"
    }
}

// show password
function showPass() {
    var pass = document.getElementById("password");
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}