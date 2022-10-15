let field_valid = getFieldValid();

function validateRouter(ev){
    let event = ev.target;
    let id = event.id;
    switch(id){
        case 'id':
            validateProjectId(event);
            break;
        case 'owner':
            validateOwner(event);
            break;
        case 'title':
            validateTitle(event);
            break;
        case 'category':
            validateCategory(event);
            break;
        case 'hours':
            validateHours(event);
            break;
        case 'rate':
            validateRate(event);
            break;
        case 'status':
        validateStatus(event);
            break;
        case 'description':
            validateDescription(event);
            break;
    }
}

function showErrorMessageIfInvalid(event, id){
    let errorMsg = document.getElementById(id+"-error");
    if (field_valid[`${id}`] && errorMsg !== null){
        event.parentElement.parentElement.removeChild(errorMsg);
    } else if (!field_valid[`${id}`] && errorMsg === null){
        errorMsg = document.createElement("div");
        errorMsg.classList += "error-message";
        errorMsg.setAttribute("id", id+"-error");
        if (event.tagName.toLowerCase() === "input" || event.tagName.toLowerCase() === "textarea"){ errorMsg.textContent = "Wrong format for project " + id; }
        else if (event.tagName.toLowerCase() === "select"){ errorMsg.textContent = "You must select a project " + id; }
        event.parentElement.parentElement.insertBefore(errorMsg, event.parentElement);
    }
    let image = document.getElementById(id+"-img");
    if (image === null){
        image = document.createElement("img");
        event.parentElement.appendChild(image);
        image.setAttribute("id", `${id}-img`);
    }
    image.setAttribute("src", field_valid[`${id}`] ? "../images/valid.png" : "../images/invalid.png");
}

function validateProjectId(event) {
    let id = event.id;
    let value = event.value;
    const PATTERN = /^[A-Za-z]([a-zA-Z0-9-_$]){2,9}$/;
    field_valid[`${id}`] = PATTERN.test(value);

    buttonEnb();
    showErrorMessageIfInvalid(event, id);

    return field_valid[`${id}`];
}
function validateOwner(event) {
    let id = event.id;
    let value = event.value;
    const PATTERN = /^[A-Za-z]([a-zA-Z0-9-]){2,9}$/;
    field_valid[`${id}`] = PATTERN.test(value);

    showErrorMessageIfInvalid(event, id);
    buttonEnb();

    return field_valid[`${id}`];
}
function validateTitle(event) {
    let id = event.id;
    let value = event.value;
    const PATTERN = /^[A-Za-z]{3,25}$/;
    field_valid[`${id}`] = PATTERN.test(value);

    buttonEnb();
    showErrorMessageIfInvalid(event, id);

    return field_valid[`${id}`];
}
function validateCategory(event) {
    let id = event.id;
    let value = event.value;
    console.log(value);
    field_valid[`${id}`] = value !== "null";

    buttonEnb();
    showErrorMessageIfInvalid(event, id);

    return field_valid[`${id}`];
}
function validateHours(event) {
    let id = event.id;
    let value = event.value;
    const PATTERN = /^[0-9]{1,3}$/;
    field_valid[`${id}`] = PATTERN.test(value);

    buttonEnb();
    showErrorMessageIfInvalid(event, id);

    return field_valid[`${id}`];
}
function validateRate(event) {
    let id = event.id;
    let value = event.value;
    const PATTERN = /^[0-9]{1,3}$/;
    field_valid[`${id}`] = PATTERN.test(value);

    buttonEnb();
    showErrorMessageIfInvalid(event, id);
    
    return field_valid[`${id}`];
}
function validateDescription(event) {
    let id = event.id;
    let value = event.value;
    const PATTERN = /^[A-Za-z]{3,25}$/;
    field_valid[`${id}`] = PATTERN.test(value);

    buttonEnb();
    showErrorMessageIfInvalid(event, id);

    return field_valid[`${id}`];
}
function validateStatus(event) {
    let id = event.id;
    let value = event.value;
    field_valid[`${id}`] = value !== "null";

    buttonEnb();
    showErrorMessageIfInvalid(event, id);

    return field_valid[`${id}`];
}
function buttonEnb(){
    let button = document.getElementById('submit');
    let valid = true;
    for (let key in field_valid) {
        //console.log(`${field_valid[key]} - ${key}`);
        if (field_valid[key] === false) {
            valid = false;
            break;
        }
    }
    //console.log(`Is button enabled? ${valid}`);
    button.disabled = !valid;
}
//To clear all the error and verified messages
function clearAllErrorMessages(){
    let errorMessages = document.querySelectorAll(".error-message");
    for (let error of errorMessages){
        error.parentElement.removeChild(error);
    }

    let images = document.querySelectorAll("img");
    for (let image of images){
        image.parentElement.removeChild(image);
    }
}

/**
    function validateAllFields(){
    let id = document.getElementById("id");
    let owner = document.getElementById("owner");
    let title = document.getElementById("title");
    let category = document.getElementById("category");
    let hours = document.getElementById("hours");
    let rate = document.getElementById("rate");
    let status = document.getElementById("status");
    let description = document.getElementById("description");

    validateProjectId(id);
    validateOwner(owner);
    validateTitle(title);
    validateCategory(category);
    validateHours(hours);
    validateRate(rate);
    validateStatus(status);
    validateDescription(description);
}
 */
//To clear all input fields and error messages when add button is clicked
function clearFields() {
    let inputs = document.querySelectorAll('div.input-container input, div.input-container select, div.input-container textarea');
    for (let input of inputs) {
        if(input.tagName.toLowerCase() === "select"){
            input.value = "null";
        }
        else{
            input.value = null;
        }
    }
    clearAllErrorMessages();
}
function disableButton(){
    let button = document.getElementById('submit');
    button.disabled = true;
}