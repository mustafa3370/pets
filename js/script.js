let loginform =document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
}
let navbar =document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}