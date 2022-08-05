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
    var h = false;
    $("#log-in").submit(function (e) {
        // e.preventDefault();
        var mail = $("#email").val();
        var pass = $("#password1").val();
        const arrProperties = JSON.parse(localStorage.getItem(`user`));
        for (let i = 0; i < arrProperties.length; i++) {
            if (mail == arrProperties[i].name && pass == arrProperties[i].password) {
                g = true;
                break;
            }

        }
        if (g) {
            localStorage.setItem(`new`,mail);
            window.open("./index.html");
            console.log("qosuldu");
        } else {
            alert("alert")
        }
    })
})
// var currentUser= JSON.stringify(lclproperties.name); localStorage.setItem(`current`,currentUser);