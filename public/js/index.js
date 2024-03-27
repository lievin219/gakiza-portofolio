const myapp=[ 'take a breakfast', 'woork on your project' , 'play FIFA','yoo'];



     

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