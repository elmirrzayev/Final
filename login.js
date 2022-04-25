$(document).ready(function () {
    $("#email").blur(function () {
        let email = $("#email").val();
        if (email == "") {
            $("#email").removeClass("is-valid");
            $("#email").addClass("is-invalid");
        } else {
            $("#email").removeClass("is-invalid");
            $("#email").addClass("is-valid");
        }
    })

    $("#password1").blur(function () {
        let password = $("#password1").val();
        if (password == "") {
            $("#password1").removeClass("is-valid");
            $("#password1").addClass("is-invalid");
        } else {
            $("#password1").removeClass("is-invalid");
            $("#password1").addClass("is-valid");
        }
    })
 
    var g = false;
    var h=false;
    $("#log-in").submit(function (e) {
        e.preventDefault();
        var mail = $("#email").val();
        var pass = $("#password1").val();
        var local = Number(localStorage.getItem(`number`));
        for (var i = 0; i <= local; i++) {
            if (mail == localStorage.getItem(`user${i}-name`)) {
                if (pass == localStorage.getItem(`user${i}-password`)) {
                    localStorage.setItem(`new`,localStorage.getItem(`user${i}-name`))
                    g = true;
                    window.location.assign("index.html");
                }
            }


        }
      
        if(!g){
            alert("bele bir istifadeci yoxdur!!!")
        }
    })
})
