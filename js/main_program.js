'use strict'
let fieldValid = {
    id: false,
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
    disableButton();
    document.getElementById('submit').addEventListener('click', createProjectObject);
    document.getElementById('reset').addEventListener("click", clearAllErrorMessages);
    //Use focusout as a trigger to validate the field as blur does not support bubbling
    document.getElementById('input-section').addEventListener('focusout', validateRouter);
    clearAllErrorMessages();
    validateAllFields();
}

function getFieldValid(){
    return fieldValid;
}