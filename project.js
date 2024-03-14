document.addEventListener('DOMContentLoaded', function() {
    const projectForm = document.getElementById('projectForm');
    const projectTitle = document.getElementById('projectTitle');
    const projectDescription = document.getElementById('projectDescription');
    const projectImage = document.getElementById('projectImage');
    const projectsContainer = document.getElementById('projectsContainer');
  
    projectForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const title = projectTitle.value.trim();
      const description = projectDescription.value.trim();
      const image = projectImage.value.trim();
      if (title !== '' && description !== '' && image !== '') {
        addProject(title, description, image);
        projectForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  
    function addProject(title, description, image) {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');
      projectElement.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <img src="${image}" alt="${title}">
      `;
      projectsContainer.appendChild(projectElement);
    }
  });