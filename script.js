function filterProjects(category) {
    let projects = document.getElementsByClassName('project-item');
    for (let i = 0; i < projects.length; i++) {
        if (category === 'all') {
            projects[i].style.display = 'block';
        } else if (projects[i].classList.contains(category)) {
            projects[i].style.display = 'block';
        } else {
            projects[i].style.display = 'none';
        }
    }
}
