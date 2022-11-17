let addbtn=document.getElementById("add btn");
let addTitle=document.getElementById("title");
let addtext=document.getElementById("text");
addbtn.addEventListener("click",(e)=>{
    if (addTitle.value ==""||addtext.value =="")
    {
        return alert("Please add note title and details");
    }
    let notes =localStorage.getItem("note");
    if(notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes)
    }
    let myObj={
        title:addTitle.value,
        text:addtext.value
    }
    noteObj.push(myObj);
    localStorage.setItem("note", JSON.stringify(noteObj));
    addTitle.value="";
    addtext.value="";
    showNotes();
})
function showNotes()
{
    let notes=localStorage.getItem("note");
    if(notes== null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes);
    }
    let html ="";
    noteObj.forEach(function(element, index)
    { 
        html +=`<div id="no">
        <p class="one">Note ${index+1}</p>
        <h3 class="notet">${element.title}</h3>
        <p class="notetext">${element.text}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="classbtn">Delete Note</button>
        <button id="${index}" onclick="editNote(this.id)" class="editbtn">Edit Note</button>
    </div>`;
    }
    )
    let noteElm=document.getElementById("note");
    if(noteObj.length!=0){
        noteElm.innerHTML=html;
    }
    else{
        noteElm.innerHTML="Add Notes"
    }
    
}

function deleteNote(index){
    let conDelete=confirm("Do you want to delete note");
    let notes=localStorage.getItem("note");
    if(conDelete==true){
    if(notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes);
    }
    noteObj.splice(index,1);
    localStorage.setItem("note",JSON.stringify(noteObj));
    
    showNotes();
}
}

function editNote(index){
    let notes=localStorage.getItem("note");
    if(addTitle.value!=""|| addtext.value!=""){
        return alert("Please clear before editing notes");
    }
    if(notes==null){
        noteObj=[]
    }
    else{
        noteObj=JSON.parse(notes);
    }
    noteObj.findIndex((element,index)=>{
        addTitle.value=element.title;
        addtext.value=element.text;
    })
    noteObj.splice(index,1);
    localStorage.setItem("note",JSON.stringify(noteObj));
}
showNotes();
