var l = true;
var r = document.querySelector("#ul");
var k = 0;
var countOfInputs = 0;
$('#button1').click(function () {
    $('#exampleModalLong').addClass("show");
    $('#exampleModalLong').addClass("modalStyle");
    $('#exampleModalLong').removeClass("d-none");
});
var check = true;
$("#exit").click(function () {
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
    if(l){

    
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
        localStorage.setItem(`user${k}-category`, $("#a").val());
        localStorage.setItem(`user${k}-nick`, $("#b").val());
        localStorage.setItem(`user${k}-tesvir`, $("#c").val());
        localStorage.setItem(`user${k}-yeni`, $("#d").val());
        localStorage.setItem(`user${k}-base`, img);
        localStorage.setItem(`user${k}-mprosessor`, $("#g").val());
        localStorage.setItem(`user${k}-dyaddas`, $("#i").val());
        localStorage.setItem(`user${k}-dyaddast`, $("#j").val());
        localStorage.setItem(`user${k}-əməliyyats`, $("#k").val());
        localStorage.setItem(`user${k}-GPU`, $("#q").val());
        localStorage.setItem(`user${k}-qiymet`, $("#f").val());
        localStorage.setItem(`all`, k);
    }
    $('#avbl').addClass("d-none");
    var z = document.createElement("td");
    for (var i = 0; i < 4; i++) {
        var q = document.createElement("th");
    }
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerText = k;
    var td1 = document.createElement("td");
    td1.innerText = localStorage.getItem(`user${k}-nick`);
    var td2 = document.createElement("td");
    td2.innerText = localStorage.getItem(`user${k}-qiymet`);
    var td3 = document.createElement("td");
    var button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-warning");
    button.innerText = "Sil";
    // button.setAttribute("class","button11");
    button.classList.add("button11");
    var button1 = document.createElement("button");
    button1.innerText = "Redakte Et";
    button1.classList.add("btn");
    button1.classList.add("btn-primary");
    button1.setAttribute("tabindex",k);
    button1.classList.add("ms-1");
    button1.classList.add("button111");
    var td4 = document.createElement("td");
    var image = document.createElement("img");
    image.classList.add("mini");
    image.setAttribute("src", localStorage.getItem('img'));
    console.log(localStorage.getItem(`user${k}-base`));
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
}else{
    let img = localStorage.getItem('img');
    // k = Number(localStorage.getItem(`all`)) + 1;
    localStorage.setItem(`user${v}-category`, $("#a").val());
    localStorage.setItem(`user${v}-nick`, $("#b").val());
    localStorage.setItem(`user${v}-tesvir`, $("#c").val());
    localStorage.setItem(`user${v}-yeni`, $("#d").val());
    localStorage.setItem(`user${v}-base`, img);
    localStorage.setItem(`user${v}-mprosessor`, $("#g").val());
    localStorage.setItem(`user${v}-dyaddas`, $("#i").val());
    localStorage.setItem(`user${v}-dyaddast`, $("#j").val());
    localStorage.setItem(`user${v}-əməliyyats`, $("#k").val());
    localStorage.setItem(`user${v}-GPU`, $("#q").val());
    localStorage.setItem(`user${v}-qiymet`, $("#f").val());
    // localStorage.setItem(`all`,k);
}
});
if (localStorage.getItem(`all`) != undefined) {
    for (var p = 1; p <= localStorage.getItem("all"); p++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerText = p;
        var td1 = document.createElement("td");
        td1.innerText = localStorage.getItem(`user${p}-nick`);
        var td2 = document.createElement("td");
        td2.innerText = localStorage.getItem(`user${p}-qiymet`);
        var td3 = document.createElement("td");
        var button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-warning");
        button.innerText = "Sil";
        // button.setAttribute("class","button11");
        button.classList.add("button11");
        var button1 = document.createElement("button");
        button1.innerText = "Redaktə Et";
        button1.classList.add("btn");
        button1.classList.add("btn-primary");
        button1.classList.add("ms-1");
        button1.setAttribute("tabindex",p);
        button1.classList.add("button111");
        var td4 = document.createElement("td");
        var image = document.createElement("img");
        image.classList.add("mini");
        image.setAttribute("src", localStorage.getItem(`user${p}-base`));
        console.log(localStorage.getItem(`user${p}-base`));
        td3.appendChild(button);
        td3.appendChild(button1);
        td4.appendChild(image);
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        $('#ul').append(tr);
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



