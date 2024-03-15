function addComment() {
  var commentInput = document.getElementById("commentInput");
  var commentText = commentInput.value.trim();

  if (commentText !== "") {
      var commentList = document.getElementById("commentList");

      // Create comment element
      var li = document.createElement("li");
      li.className = "comment";
      li.innerHTML = commentText + '<button class="remove-btn" onclick="removeComment(this)">X</button>';
      
      // Append comment to the list
      commentList.appendChild(li);

      // Clear the input field
      commentInput.value = "";
  }
}

// Function to remove a comment
function removeComment(commentElement) {
  var parent = commentElement.parentNode;
  parent.parentNode.removeChild(parent);
}