function validateProjectId() {
    let value = document.getElementById('project-id').value;
    const PATTERN = /^[A-Za-z]([a-zA-Z0-9-_$]){2,9}$/;
    field_valid['project-id'] = PATTERN.test(value);
    buttonEnb()
    return field_valid['project-id'];
}
function validateOwner() {
    let value = document.getElementById('owner').value;
    const PATTERN = /^[A-Za-z]([a-zA-Z0-9-]){2,9}$/;
    field_valid['owner'] = PATTERN.test(value);
    buttonEnb()
    return field_valid['owner'];
}
function validateTitle() {
    let value = document.getElementById('title').value;
    const PATTERN = /^[A-Za-z]{3,25}$/;
    field_valid['title'] = PATTERN.test(value);
    buttonEnb()
    return field_valid['title'];
}
function validateCategory() {
    let value = document.getElementById('category').value;
    field_valid['category'] = value != null;
    buttonEnb()
    return field_valid['category'];
}
function validateHours() {
    let value = document.getElementById('hours').value;
    const PATTERN = /^[0-9]{1,3}$/;
    field_valid['hours'] = PATTERN.test(value);
    buttonEnb()
    return field_valid['hours'];
}
function validateRate() {
    let value = document.getElementById('rate').value;
    const PATTERN = /^[0-9]{1,3}$/;
    field_valid['rate'] = PATTERN.test(value);
    buttonEnb()
    return field_valid['rate'];
}
function validateDescription() {
    let value = document.getElementById('description').value;
    const PATTERN = /^[A-Za-z]{3,25}$/;
    field_valid['description'] = PATTERN.test(value);
    buttonEnb()
    return field_valid['description'];
}
function validateStatus() {
    let value = document.getElementById('status').value;
    field_valid['status'] = value != null;
    buttonEnb()
    return field_valid['status'];
}
function buttonEnb(){
    let button = document.getElementById('submit');
    let valid = true;
    for (let key in field_valid) {
        if (field_valid[key] === false) {
            valid = false;
            break;
        }
    }
    button.disabled = !valid;
}