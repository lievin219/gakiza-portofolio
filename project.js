  const commentForm = document.getElementById('commentForm');
 const commentsContainer = document.getElementById('comments');
 
 commentForm.addEventListener('submit', function(event) {
     event.preventDefault();
     
     const comment = document.getElementById('comment').value;
     const email = document.getElementById('email').value;
     
     if (comment && email) {
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
 });
 
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