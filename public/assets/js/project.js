  const commentForm = document.getElementById('commentForm');
 const commentsContainer = document.getElementById('comments');
 
 commentForm.addEventListener('submit', async(e)=> {
     e.preventDefault();
    
     
     const commenty = document.getElementById('comment').value;
     const emaily = document.getElementById('email').value;
     
     if (commenty && emaily) {
         const commentElement = document.createElement('div');
         commentElement.classList.add('comment');
         commentElement.innerHTML = `
             <div class="comment-header">
                 <span>${email}</span>
                 <span class="delete-btn" onclick="deleteComment(this)">Delete</span>
             </div>
             <div class="comment-body">${comment}</div>
         `;
         commentsContainer.appendChild(commentElement);
         commentsContainer.style.color='#A8DADC'
         commentForm.reset();
     } else {
         alert('Please fill in both comment and email fields.');
     }
 ;
 
 function deleteComment(deleteBtn) {
     const comment = deleteBtn.parentElement.parentElement;
     comment.remove();
 }
 function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-100px"
}
     
      
       try{
       const dataretrieved=await fetch('http://localhost:3000/comment',{
             method:'POST',
             body:JSON.stringify({email:emaily,message:commenty}),
             headers:{ 'Content-Type':'application/json'}
       })
       const  fetcha=await dataretrieved.json()
        if(fetcha.newcommenti){
                console.log(fetcha.newcommenti)
        }
        else if(fetcha.error){
        console.log(fetcha.error)
        }
    }
       catch(error){
   console.log(error)
       }
    })