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
 const submitbutton=document.getElementById('submittingi')
  submitbutton.addEventListener('click',async(e)=>{
      e.preventDefault()
       const namei=document.getElementById('namei').value
        const emailie=document.getElementById('emaili').value
         const messagei=document.getElementById('messagei').value

          try{
             const respo=await fetch('/contact',{
                 method:'POST',
                 body:JSON.stringify({name:namei,emai:emailie,message:messagei}),
                 headers:{ 'Content-Type':'application/json'}
             })
             const datew=await respo.json()
             if(datew.newcomment){
               alert('succesfully submitted')

             }
             else if(datew.error){
                 alert('comment failed')
             }
          }
          catch(err){
     console.log(err)
          }
  })