$('#button1').click(function () {
    $('#exampleModalLong').addClass("show");
    $('#exampleModalLong').addClass("modalStyle");
    $('#exampleModalLong').removeClass("d-none");
});
    $("#exit").click(function () {
        $('#exampleModalLong').removeClass("show");
        $('#exampleModalLong').removeClass("modalStyle");
        $('#exampleModalLong').addClass("d-none");
    });
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
        } else {
            para.removeClass("is-invalid");
            para.addClass("is-valid");
        }
    }