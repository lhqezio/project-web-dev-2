function validateRouter(ev){
    let event = ev.target;
    let id = event.id;
    switch(id){
        case 'project-id':
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
        case 'description':
            validateDescription(event);
            break;
        case 'status':
            validateStatus(event);
            break;
    }
}
function validateProjectId(event) {
    let value = event.value;
    const PATTERN = /^[A-Za-z]([a-zA-Z0-9-_$]){2,9}$/;
    field_valid['project-id'] = PATTERN.test(value);
    console.log(field_valid['project-id']);
    buttonEnb()
    return field_valid['project-id'];
}
function validateOwner(event) {
    let value = event.value;
    const PATTERN = /^[A-Za-z]([a-zA-Z0-9-]){2,9}$/;
    field_valid['owner'] = PATTERN.test(value);
    console.log(field_valid['owner']);
    buttonEnb()
    return field_valid['owner'];
}
function validateTitle(event) {
    let value = event.value;
    const PATTERN = /^[A-Za-z]{3,25}$/;
    field_valid['title'] = PATTERN.test(value);
    console.log(field_valid['title']);
    buttonEnb()
    return field_valid['title'];
}
function validateCategory(event) {
    let value = event.value;
    field_valid['category'] = value !== `null`;
    console.log(field_valid['category']);
    buttonEnb()
    return field_valid['category'];
}
function validateHours(event) {
    let value = event.value;
    const PATTERN = /^[0-9]{1,3}$/;
    field_valid['hours'] = PATTERN.test(value);
    console.log(field_valid['hours']);
    buttonEnb()
    return field_valid['hours'];
}
function validateRate(event) {
    let value = event.value;
    const PATTERN = /^[0-9]{1,3}$/;
    field_valid['rate'] = PATTERN.test(value);
    console.log(field_valid['rate']);
    buttonEnb()
    return field_valid['rate'];
}
function validateDescription(event) {
    let value = event.value;
    const PATTERN = /^[A-Za-z]{3,25}$/;
    field_valid['description'] = PATTERN.test(value);
    console.log(field_valid['description']);
    buttonEnb()
    return field_valid['description'];
}
function validateStatus(event) {
    let value = event.value;
    field_valid['status'] = value !== `null`;
    console.log(field_valid['status']);
    buttonEnb()
    return field_valid['status'];
}
function buttonEnb(){
    let button = document.getElementById('submit');
    let valid = true;
    for (let key in field_valid) {
        console.log(`${field_valid[key]} - ${key}`);
        if (field_valid[key] === false) {
            valid = false;
            break;
        }
    }
    console.log(`Is button enabled? ${valid}`);
    button.disabled = !valid;
}
function clearField(){
    let field = document.querySelectorAll('div.input-container>input,select,textarea');
    field.forEach((f)=>{
        if(f.tagName === 'select'){
            f.value = `null`
        }
        else {
            f.value = ''
        }
    })
}