$(document).ready(function () {
    //bu deyisen user{k}-name-də və başqalarında bu rolu oynayacaq
    var k = 1;
    //bu deyisenler hamisinin birlikde dogru olub olmamaginda bize yardim edecek
    var passwordcheck = false;
    var namecheck = false;
    // var phonecheck = false;
    var usernamecheck = false;
    $("#name").blur(function () {
        var name = $("#name").val();
        if (name == "") {
            $("#name").removeClass("is-valid");
            $("#name").addClass("is-invalid");
        } else {
            $("#name").removeClass("is-invalid");
            $("#name").addClass("is-valid");
            namecheck = true;
        }
    })
    $("#phone").blur(function () {
        var phone = $("#phone").val();
        if (phone == "") {
            $("#phone").removeClass("is-valid");
            $("#phone").addClass("is-invalid");
        } else {
            $("#phone").removeClass("is-invalid");
            $("#phone").addClass("is-valid");
            // phonecheck = true;
        }
    })
    $("#username").blur(function () {
        var user = $("#username").val();
        if (user == "") {
            $("#username").removeClass("is-valid");
            $("#username").addClass("is-invalid");
        } else {
            $("#username").removeClass("is-invalid");
            $("#username").addClass("is-valid");
            usernamecheck = true;
        }
    })
    $("#password1").blur(function () {
        var pass = $("#password1").val();
        if (pass == "") {
            $("#password1").removeClass("is-valid");
            $("#password1").addClass("is-invalid");
        } else {
            $("#password1").removeClass("is-invalid");
            $("#password1").addClass("is-valid");
            
        }
    })

    $("#password1").keyup(function () {
        var g = $("#password1").val();
        if (g.length < 6 || 12 < g.length) {
            $(".signg").removeClass("d-none");
            $("#password1").removeClass("is-valid");
            $("#password1").addClass("is-invalid");
        } else if (g.length >= 6 && 12 >= g.length) {
            $(".signg").addClass("d-none");
            $("#password1").removeClass("is-invalid");
            $("#password1").addClass("is-valid");
            passwordcheck = true;
        }
    });
    $("#Signup").click(function(e){
        e.preventDefault();
    if(passwordcheck&&usernamecheck&&namecheck){
        k=Number(localStorage.getItem(`number`))+1;
        localStorage.setItem(`user${k}-fname`,$("#name").val());
        localStorage.setItem(`user${k}-phone`,$("#phone").val());
        localStorage.setItem(`user${k}-name`,$("#username").val());
        localStorage.setItem(`user${k}-password`,$("#password1").val());
        localStorage.setItem(`number`,k);
    }else{
        alert("Bəzi Yanlışlar var")
    } 
})
})
