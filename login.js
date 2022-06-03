const username= document.getElementById("username");
const password= document.getElementById("password");
const submit= document.getElementById("submit");
const signuprr =JSON.parse(localStorage.getItem("signuparr"));
const loginarr=[];
submit.addEventListener('click',(e) => {
    e.preventDefault();
    const user={
        name:username.value,
        password: password.value
    }
    let valid=false;
    for(var i=0 ; i< signuprr.length; i++)
    {
        if(user.name==signuprr[i].name){
            valid=true;
            console.log("if");
        }
    }
    if(valid){
        loginarr.push(user);
        localStorage.setItem("loginarr",JSON.stringify(loginarr));
        window.location.href="home.html";
    }
    else{
        alert("Invalid user");
    }
   
})