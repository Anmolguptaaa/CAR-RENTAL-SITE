let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
document.querySelector('#loginbtn').onclick=()=>{
    document.querySelector('.loginform').classList.toggle('active');
}
document.querySelector('.closeloginform').onclick=()=>{
    document.querySelector('.loginform').classList.remove('active');
window.onscroll = () =>{
    if(window.scrollY >0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
window.onload = () =>{
    if(window.scrollY >0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }

}
document.querySelector('.home').onmousemove=(e)=>{
    document
}