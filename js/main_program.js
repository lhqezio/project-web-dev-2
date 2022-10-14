'use strict'
let field_valid = {
    'project-id': false,
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
    document.getElementById('input-section').addEventListener('input', validateRouter);

}