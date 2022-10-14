'use strict'
let field_valid = {
    'project_id': false,
    owner: false,
    title: false,
    category: false,
    hours: false,
    rate: false,
    description: false,
    status: false,
}
let projArr = {};
window.addEventListener('DOMContentLoaded', init);
function init() {
    document.getElementById('submit').disabled = true;
    document.getElementById('project-id').addEventListener('blur', validateProjectId);
    document.getElementById('owner').addEventListener('blur', validateOwner);
    document.getElementById('title').addEventListener('blur', validateTitle);
    document.getElementById('category').addEventListener('blur', validateCategory);
    document.getElementById('hours').addEventListener('blur', validateHours);
    document.getElementById('rate').addEventListener('blur', validateRate);
    document.getElementById('description').addEventListener('blur', validateDescription);
    document.getElementById('status').addEventListener('blur', validateStatus);
}
