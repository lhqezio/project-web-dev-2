export function validateProjectId() {
    let value = document.getElementById('project-id').value;
    const PATTERN = /^[A-Za-z]([a-zA-Z0-9-_$]){2,9}/;
    field_valid['project-id'] = PATTERN.test(value);
    return field_valid['project-id'];
}
export function validateOwner() {
    let value = document.getElementById('owner').value;
    const PATTERN = /^[A-Za-z]([a-zA-Z0-9-]){2,9}/;
    field_valid['owner'] = PATTERN.test(value);
    return field_valid['owner'];
}
export function validateTitle() {
    let value = document.getElementById('title').value;
    const PATTERN = /^[A-Za-z]{3,25}/;
    field_valid['title'] = PATTERN.test(value);
    return field_valid['title'];
}
export function validateCategory() {
    let value = document.getElementById('category').value;
    field_valid['category'] = value != null;
    return field_valid['category'];
}
export function validateHours() {
    let value = document.getElementById('hours').value;
    const PATTERN = /^[0-9]{1,3}/;
    field_valid['hours'] = PATTERN.test(value);
    return field_valid['hours'];
}
export function validateRate() {
    let value = document.getElementById('rate').value;
    const PATTERN = /^[0-9]{1,3}/;
    field_valid['rate'] = PATTERN.test(value);
    return field_valid['rate'];
}
export function validateDescription() {
    let value = document.getElementById('description').value;
    const PATTERN = /^[A-Za-z]{3,25}/;
    field_valid['description'] = PATTERN.test(value);
    return field_valid['description'];
}