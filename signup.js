const username=document.getElementById("username");
const password=document.getElementById("password");
const submit=document.getElementById("submit");

if(localStorage.getItem("signuparr")==null){
  var signuparr=[];
}
else{
    signuparr=JSON.parse(localStorage.getItem("signuparr"));
}

submit.addEventListener('click',(e) =>{
    e.preventDefault();
    const user ={
        name: username.value,
        password:password.value
    }
    signuparr.push(user);
    localStorage.setItem("signuparr",JSON.stringify(signuparr));
    window.location.href="index.html";
})


