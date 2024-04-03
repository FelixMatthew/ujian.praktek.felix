function LoginVerification (){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username=="admin" && password=="admin"){
        window.alert("Login Berhasil");
        window.location="pages/menu.html";
    }
    else if (username == password == "") {
        window.alert("Masukan Email atau Password");
    }
    else {
        window.alert("Login Gagal kocak");
    }
}

function Clear(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}

function myFunction() {
    var element = docum
}