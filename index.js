var username = document.querySelector(".username");
if(localStorage.getItem('new')!=undefined){
username.innerText = localStorage.getItem('new');
}else{
    $('#login').removeClass("d-none");
    $('#login').addClass("d-inline-block");
    $('#logout').removeClass("d-none");
}
$('#logout').click(function(){
    localStorage.removeItem('new');
    $('#logout').addClass("d-none");
});