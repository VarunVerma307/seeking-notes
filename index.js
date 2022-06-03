const home=document.getElementById("home");
const login=document.getElementById("login");
const signup=document.getElementById("signup");

home.addEventListener('click',(e) => {
   e.preventDefault();
   window.location.href='home.html';
})
login.addEventListener('click',(e) => {
   e.preventDefault();
   window.location.href='login.html';
})
signup.addEventListener('click',(e) => {
   e.preventDefault();
   window.location.href='signup.html';
})


