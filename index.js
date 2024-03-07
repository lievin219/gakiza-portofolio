



     

function got(){
    document.querySelector('.dax')
    const inputElement =document.querySelector('.dax');
   document.querySelector('.lii').innerHTML= inputElement.value
};

var work=document.getElementsByClassName("work");
var skills=document.getElementsByClassName("skills");
function opentab(tabname ){
    for(skiaa of skills){
    skiaa.classList.remove("skill");
    }
    for(worklll of work){
        worklll.classList.remove("active");
    }
    event.currentTarget.classList.add("skill");
document.getElementById(tabname).classList.add("active");
}
var sidemeu=document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-100px"
}
 const fullname=document.getElementById('fullname')
 const email=document.getElementById('email');
  
  const message=document.getElementById("message")

   function sendemail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "lievinm635@gmail.com",
        Password : "Mugabekazilievin219@",
        To : 'lievinm635@gmail.com',
        From : "",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
   }

 