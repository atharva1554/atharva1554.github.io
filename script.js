function filterProjects(category) {
    var projects = document.getElementsByClassName('project-item');
    for (var i = 0; i < projects.length; i++) {
        if (category === 'all') {
            projects[i].style.display = 'block';
        } else {
            if (projects[i].getAttribute('data-category') === category) {
                projects[i].style.display = 'block';
            } else {
                projects[i].style.display = 'none';
            }
        }
    }
}
