document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const emailform=document.getElementById('youremail').value;
    const commentInput = document.getElementById('commentInput');
    const deletebutton=document.getElementById('delete');
    const commentsContainer = document.getElementById('commentsContainer');
  
    commentForm.addEventListener('submit', function(event) {

      event.preventDefault();
      const commentText = commentInput.value.trim();
      if (commentText !== ''&&emailform!=='') {
        addComment(commentText);
        commentInput.value = '';
        
        emailform.value=''
      }
    });
  
    function addComment(commentText) {
      const commentElement = document.createElement('div');
      const removebutton=document.createElement('button')
      removebutton.innerHTML='delete'
      commentElement.classList.add('comment');
      commentElement.textContent = commentText || emailform;
      commentsContainer.appendChild(commentElement);
      
    }
  });
  commentsContainer.addEventListener('click',function(e){
    if(e.target.tagName='BUTTON'){
       e.target.parentElement.remove()
    }
   
      },false)
   



   