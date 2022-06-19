var btn = document.getElementById('btn');
var username=JSON.parse (localStorage.getItem("loginarr"))[0].name;
console.log(username);
if (localStorage.getItem(username) == null) {
   var notesarr= [];
}
else {
   notesarr=JSON.parse(localStorage.getItem(username));
   shownotes();
}
btn.addEventListener('click', function submit(e) {
   e.preventDefault();
   var title = document.getElementById('title').value;
   var desc=document.getElementById('desc').value;
   var note={
      title: title,
      desc:desc
   }
   notesarr.push(note);
   if (title == '' || desc == '') {
      alert("please fill all field");
   }
   else {
      localStorage.setItem(username, JSON.stringify(notesarr));
      alert("Notes saved successfully")
      document.getElementById('title').value = "";
      document.getElementById('desc').value = "";
   }
   shownotes();
});

var deletebtn = document.getElementById("delete");
function shownotes() {
   var localnotesarr= JSON.parse(localStorage.getItem(username));
   var noteEle = '';
   if(localnotesarr==null){
      noteEle=`<h3>no notes found</h3>`;
   }
   else{
   for (var i = 0; i < localnotesarr.length; i++) {
      noteEle += `<div class="noteDiv">
        <div class="titleDiv">
        <h3>Title:</h3><p>${localnotesarr[i]}</p>
        <h3>Description:</h3><p>${localnotesarr[i]}</p>
        <button id=${i} onclick={deleteOne(this.id)}>Delete</button>
        </div>
        </div>`}
      }
   var Div = document.getElementById('Div');
   Div.innerHTML = noteEle;

}

function deleteOne(id) {
   var localnotesarr=JSON.parse(localStorage.getItem(username));
   localnotesarr.splice(id,1);
   shownotes();
   if(localnotesarr.length==0){
      localStorage.removeItem(username);
      notesarr=[];
      Div.innerHTML=`<h4>You have cleared all notes please first...</h4>`
   }
}
