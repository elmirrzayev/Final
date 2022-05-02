var k = 0;
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
    function imageToBase(elementt){
     var file = elementt.files[0];
     var reader = new FileReader();
     reader.onloadend = function(){
       base64 = reader.result;
     };
     reader.readAsDataURL(file);
    }
// console.log(base64);
    $("#add").click(function () {
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
        if(check){
            k=Number(localStorage.getItem(`all`))+1;
            localStorage.setItem(`user${k}-category`,$("#a").val());
            localStorage.setItem(`user${k}-nick`,$("#b").val());
            localStorage.setItem(`user${k}-tesvir`,$("#c").val());
            localStorage.setItem(`user${k}-yeni`,$("#d").val());
            // localStorage.setItem(`user${k}-base`,);
            localStorage.setItem(`user${k}-mprosessor`,$("#g").val());
            localStorage.setItem(`user${k}-dyaddas`,$("i").val());
            localStorage.setItem(`user${k}-dyaddast`,$("#j").val());
            localStorage.setItem(`user${k}-əməliyyats`,$("#k").val());
            localStorage.setItem(`user${k}-GPU`,$("#q").val());
            localStorage.setItem(`all`,k);
            }
    });
    $("#remove").click(function(){
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
        
    });
    
    // function
    function Sifirla(element){
         element.val() = "";
    }
    function isInvalid(para) {
        if (para.val() == "") {
            para.removeClass("is-valid");
            para.addClass("is-invalid"); 
            check=false;
        } else {
            para.removeClass("is-invalid");
            para.addClass("is-valid");
           
        }
    }

