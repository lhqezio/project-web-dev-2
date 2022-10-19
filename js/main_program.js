'use strict'
let fieldValid = {
    id: false,
    owner: false,
    title: false,
    category: false,
    status: false,
    hours: false,
    rate: false,
    description: false,
}
let projArr = [];

let tempRow = [];
window.addEventListener('DOMContentLoaded', init);

function init() {
    disableButton();
    document.getElementById("query").addEventListener("input", searchByKeyword);
    document.getElementById("proj-table").addEventListener('click', (evt)=>{
        console.log("here");
        if (evt.target.id.charAt(0) === 'e'&& evt.target.id.charAt(1) !== 'd'){
            editProject(evt.target.id);
        }
        else if (evt.target.id.charAt(0) === 't'){
            deleteProject(evt.target.id);
        }
        else if (evt.target.id.charAt(0) === 's'){
            saveEdit(evt.target.id);
        }
        else if (evt.target.id.charAt(0) === 'c'){
            cancelEdit(evt.target.id);
        }
    });
    document.getElementById('submit').addEventListener('click', addProject);
    document.getElementById('submit').addEventListener('mouseover', validateAllFields);
    document.getElementById('reset').addEventListener("click", clearAllErrorMessages);
    document.querySelector("#save").addEventListener("click", saveAllProjects);
    document.querySelector("#clear").addEventListener("click", clearStorage);
    //Use focusout as a trigger to validate the field as blur does not support bubbling
    document.getElementById('input-section').addEventListener('focusout', validateRouter);
    clearAllErrorMessages();
    validateAllFields();
    
}

function getFieldValid(){
    return fieldValid;
}