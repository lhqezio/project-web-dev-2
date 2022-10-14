'use strict'
let fieldValid = {
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
    document.getElementById('reset').addEventListener("click", clearAllErrorMessages);
    document.getElementById('input-section').addEventListener('change', validateRouter);
    clearAllErrorMessages();
}

function getFieldValid(){
    return fieldValid;
}