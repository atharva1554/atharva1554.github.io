function filterProjects(category) {
    var projects = document.getElementsByClassName('project-item');
    for (var i = 0; i < projects.length; i++) {
        if (category === 'all') {
            projects[i].classList.add('show');
        } else {
            if (projects[i].getAttribute('data-category') === category) {
                projects[i].classList.add('show');
            } else {
                projects[i].classList.remove('show');
            }
        }
    }
}

// Show all projects by default
filterProjects('all');
