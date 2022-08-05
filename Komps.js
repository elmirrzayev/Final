var l = true;
var r = document.querySelector("#ul");
var k = 0;
var arrJSON = [];
var countOfInputs = 0;
let v;
$('#button1').click(function () {
    $('#exampleModalLong').addClass("show");
    $('#exampleModalLong').addClass("modalStyle");
    $('#exampleModalLong').removeClass("d-none");
});
var check = true;
$("#exit").click(function () {

    $("#a").text("");
    $("#b").text("");
    $("#c").text("");
    $("#d").text("");
    $("#g").text("");
    $("#i").text("");
    $("#j").text("");
    $("#k").text("");
    $("#q").text("");
    $("#f").text("");
    $('#exampleModalLong').removeClass("show");
    $('#exampleModalLong').removeClass("modalStyle");
    $('#exampleModalLong').addClass("d-none");
});
var base64;
function imageToBase(elementt) {
    var file = elementt.files[0];
    var reader = new FileReader();
    reader.onload = function () { localStorage.setItem('img', reader.result) }
    reader.readAsDataURL(file);
}
// console.log(base64);
$("#add").click(function () {
    if (l) {


        countOfInputs = 0;
        isInvalid($("#a"));
        isInvalid($("#b"));
        isInvalid($("#c"));
        isInvalid($("#d"));
        isInvalid($("#e"));
        isInvalid($("#g"));
        isInvalid($("#i"));
        isInvalid($("#j"));
        isInvalid($("#k"));
        isInvalid($("#f"));
        isInvalid($("#q"));
        isInvalid($("#f"));
        console.log(countOfInputs);
        if (countOfInputs >= 11) {
            let img = localStorage.getItem('img');
            k = Number(localStorage.getItem(`all`)) + 1;
            localStorage.setItem(`all`, k);
            var json = {
                category: $("#a").val(),
                nick: $("#b").val(),
                tesvir: $("#c").val(),
                yeni: $("#d").val(),
                base: img,
                mprosessor: $("#g").val(),
                dyaddas: $("#i").val(),
                dyaddast: $("#j").val(),
                emeliyyats: $("#k").val(),
                gpu: $("#q").val(),
                qiymet: $("#f").val()
            };
            arrJSON.push(json);
            localStorage.setItem(`prop`, JSON.stringify(arrJSON));
        }
        arrPROP = JSON.parse(localStorage.getItem(`prop`));
        $('#avbl').addClass("d-none");
        var z = document.createElement("td");
        for (var i = 0; i < 4; i++) {
            var q = document.createElement("th");
        }
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerText = arrPROP.length;
        var td1 = document.createElement("td");
        td1.innerText = arrPROP[arrPROP.length - 1].nick;
        var td2 = document.createElement("td");
        td2.innerText = arrPROP[arrPROP.length - 1].qiymet;
        var td3 = document.createElement("td");
        var button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-warning");
        button.innerText = "Sil";
        // button.setAttribute("class","button11");
        button.classList.add("button11");
        button.setAttribute("tabindex", k);
        var button1 = document.createElement("button");
        button1.innerText = "Redakte Et";
        button1.classList.add("btn");
        button1.classList.add("btn-primary");
        button1.setAttribute("tabindex", k);
        button1.classList.add("ms-1");
        button1.classList.add("button111");
        var td4 = document.createElement("td");
        var image = document.createElement("img");
        image.classList.add("mini");
        image.setAttribute("src", localStorage.getItem('img'));
        console.log(localStorage.getItem(/*`user${k}-base`*/`img`));
        td3.appendChild(button);
        td3.appendChild(button1);
        td4.appendChild(image);
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        $('#ul').append(tr);
        $(".button11").click(function () {
            if (confirm("Eminsen?")) {
                // console.log("Heqiqeten?");
                this.parentNode.parentNode.remove();

            }
        });
        $(".button111").click(function () {
            $('#exampleModalLong').addClass("show");
            $('#exampleModalLong').addClass("modalStyle");
            $('#exampleModalLong').removeClass("d-none");
            l = false;
            var v = this.getAttribute("tabindex");
        });
    } else {
        let img = localStorage.getItem('img');
        // k = Number(localStorage.getItem(`all`)) + 1;
        // localStorage.setItem(`user${v}-category`, $("#a").val());
        // localStorage.setItem(`user${v}-nick`, $("#b").val());
        // localStorage.setItem(`user${v}-tesvir`, $("#c").val());
        // localStorage.setItem(`user${v}-yeni`, $("#d").val());
        // localStorage.setItem(`user${v}-base`, img);
        // localStorage.setItem(`user${v}-mprosessor`, $("#g").val());
        // localStorage.setItem(`user${v}-dyaddas`, $("#i").val());
        // localStorage.setItem(`user${v}-dyaddast`, $("#j").val());
        // localStorage.setItem(`user${v}-əməliyyats`, $("#k").val());
        // localStorage.setItem(`user${v}-GPU`, $("#q").val());
        // localStorage.setItem(`user${v}-qiymet`, $("#f").val());
        var json = {
            category: $("#a").val(),
            nick: $("#b").val(),
            tesvir: $("#c").val(),
            yeni: $("#d").val(),
            base: img,
            mprosessor: $("#g").val(),
            dyaddas: $("#i").val(),
            dyaddast: $("#j").val(),
            emeliyyats: $("#k").val(),
            gpu: $("#q").val(),
            qiymet: $("#f").val()
        }
        arrJSON.push(json);
        localStorage.setItem(`prop`, JSON.stringify(arrJSON));


        // localStorage.setItem(`all`,k);
    }
});



$("#redakte").click(function () {
    console.log(v);
    arrJSON = JSON.parse(localStorage.getItem(`prop`));
    arrJSON[v].category = $("#a").val();
    arrJSON[v].nick = $("#b").val();
    arrJSON[v].tesvir = $("#c").val();
    arrJSON[v].yeni = $("#d").val();
    arrJSON[v].mprosessor = $("#g").val();
    arrJSON[v].dyaddas = $("#i").val();
    arrJSON[v].dyaddast = $("#j").val();
    arrJSON[v].emeliyyats = $("k").val();
    arrJSON[v].gpu = $("#q").val();
    arrJSON[v].qiymet = $("#f").val();
    localStorage.setItem(`prop`, JSON.stringify(arrJSON));
});
if (localStorage.getItem(`prop`)) {
    arrPROP = JSON.parse(localStorage.getItem(`prop`));
    for (var p = 0; p < arrPROP.length; p++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerText = p;
        var td1 = document.createElement("td");
        td1.innerText = arrPROP[arrPROP.length - 1].nick;
        var td2 = document.createElement("td");
        td2.innerText = arrPROP[arrPROP.length - 1].qiymet;
        var td3 = document.createElement("td");
        var button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-warning");
        button.innerText = "Sil";
        // button.setAttribute("class","button11");
        button.classList.add("button11");
        button.setAttribute("tabindex", k);
        var button1 = document.createElement("button");
        button1.innerText = "Redaktə Et";
        button1.classList.add("btn");
        button1.classList.add("btn-primary");
        button1.classList.add("ms-1");
        button1.setAttribute("tabindex", p);
        button1.classList.add("button111");
        var td4 = document.createElement("td");
        var image = document.createElement("img");
        image.classList.add("mini");
        image.setAttribute("src", localStorage.getItem('img'));
        // console.log(localStorage.getItem(`user${p}-base`));
        td3.appendChild(button);
        td3.appendChild(button1);
        td4.appendChild(image);
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        $('#ul').append(tr);
        k++;
    }
}
$("#remove").click(function () {
    Sifirla($("#a"));
    Sifirla($("#b"));
    Sifirla($("#c"));
    Sifirla($("#d"));
    Sifirla($("#e"));
    Sifirla($("#g"));
    Sifirla($("#i"));
    Sifirla($("#j"));
    Sifirla($("#k"));
    Sifirla($("#q"));
    Sifirla($("#f"));

    isInvalid($("#a"));
    isInvalid($("#b"));
    isInvalid($("#c"));
    isInvalid($("#d"));
    isInvalid($("#e"));
    isInvalid($("#g"));
    isInvalid($("#i"));
    isInvalid($("#j"));
    isInvalid($("#k"));
    isInvalid($("#q"));
    isInvalid($("#f"));
});

// function
function Sifirla(element) {
    element.val("");
    countOfInputs = 0;
}
function isInvalid(para) {
    if (para.val() == "") {
        para.removeClass("is-valid");
        para.addClass("is-invalid");
        countOfInputs--;
    } else {
        para.removeClass("is-invalid");
        para.addClass("is-valid");
        countOfInputs++;
    }
}
$(".button11").click(function () {
    if (confirm("Eminsen?")) {
        this.parentNode.parentNode.remove();
        arrJSON = JSON.parse(localStorage.getItem(`prop`));
        tabindex = this.getAttribute("tabindex");
        arrJSON.splice(tabindex, 1);
        console.log(arrJSON,tabindex);
        localStorage.setItem(`prop`,JSON.stringify(arrJSON));
    }
   
});

$(".button111").click(function () {
    console.log("islemir");
    $('#exampleModalLong').addClass("show");
    $('#exampleModalLong').addClass("modalStyle");
    $('#exampleModalLong').removeClass("d-none");
    l = false;
    v = this.getAttribute("tabindex");
    arrJSON = JSON.parse(localStorage.getItem(`prop`));
    console.log(arrJSON);
    $("#a").val(arrJSON[v].category);
    $("#b").val(arrJSON[v].nick);
    $("#c").val(arrJSON[v].tesvir);
    $("#d").val(arrJSON[v].yeni);
    $("#g").val(arrJSON[v].mprosessor);
    $("#i").val(arrJSON[v].dyaddas);
    $("#j").val(arrJSON[v].dyaddast);
    $("#k").val(arrJSON[v].emeliyyats);
    $("#q").val(arrJSON[v].gpu);
    $("#f").val(arrJSON[v].qiymet);
    
});




