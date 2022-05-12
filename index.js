var username = document.querySelector(".username");
$('#logout').click(function(){
    localStorage.removeItem('new');
    $('#logout').addClass("d-none");
    $('#login').removeClass("d-none");
    $('#login').addClass("d-inline-block");
    $('#mycomps').addClass("d-none");
});
if(localStorage.getItem('new')!=undefined){
username.innerText = localStorage.getItem('new');
}else{
    $('#login').removeClass("d-none");
    $('#login').addClass("d-inline-block");
    $('#logout').addClass("d-none");
    $('#mycomps').addClass("d-none");
};
