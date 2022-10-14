`use strict`
function addProject() {
    let proj = {
        'project-id': document.getElementById('project-id').value,
        owner: document.getElementById('owner').value,
        title: document.getElementById('title').value,
        category:  document.getElementById('category').value,
        hours: document.getElementById('hours').value,
        rate:  document.getElementById('rate').value,
        description: document.getElementById('description').value,
        status: document.getElementById('status').value,
    };
    projArr.push(proj);
    clearField();
}