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

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.project-filters button');
    const projects = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('onclick').split("'")[1];
            filterProjects(category);
        });
    });

    function filterProjects(category) {
        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }
});
