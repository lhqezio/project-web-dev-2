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
let projArr = [];
window.addEventListener('DOMContentLoaded', init);
function init() {
    document.getElementById('submit').disabled = true;
    //Use focusout as a trigger to validate the field as blur does not support bubbling
    document.getElementById('input-section').addEventListener('focusout', validateRouter);
    document.getElementById('submit').addEventListener('click', addProject);

}