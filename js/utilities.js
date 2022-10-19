`use strict`;

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

function showErrorMessageIfInvalid(event){
    let id = event.id;
    let errorMsg = document.getElementById(id+"-error");
    if (fieldValid[`${id}`] && errorMsg !== null){
        event.parentElement.parentElement.removeChild(errorMsg);
    } else if (!fieldValid[`${id}`] && errorMsg === null){
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
    image.setAttribute("src", fieldValid[`${id}`] ? "../images/valid.png" : "../images/invalid.png");
}

function validateProjectId(event,id=event.id, editingTable=false) {
    let value = event.value;
    const PATTERN = /^[A-Za-z]([a-zA-Z0-9-_$]){2,9}$/;
    fieldValid[`${id}`] = PATTERN.test(value);
    if (!editingTable) showErrorMessageIfInvalid(event);
    buttonEnb();
    return fieldValid[`${id}`];
}
function validateOwner(event,id=event.id, editingTable=false) {
    let value = event.value;
    const PATTERN = /^[A-Za-z]([a-zA-Z0-9-]){2,9}$/;
    fieldValid[`${id}`] = PATTERN.test(value);
    if (!editingTable) showErrorMessageIfInvalid(event);
    buttonEnb();
    return fieldValid[`${id}`];
}
function validateTitle(event,id=event.id, editingTable=false) {
    let value = event.value;
    const PATTERN = /^[A-Za-z]{3,25}$/;
    fieldValid[`${id}`] = PATTERN.test(value);
    if (!editingTable) showErrorMessageIfInvalid(event);
    buttonEnb();
    return fieldValid[`${id}`];
}
function validateCategory(event,id=event.id, editingTable=false) {
    let value = event.value;
    fieldValid[`${id}`] = value !== "null";
    if (!editingTable) showErrorMessageIfInvalid(event);
    buttonEnb();
    return fieldValid[`${id}`];
}
function validateHours(event,id=event.id, editingTable=false) {
    let value = event.value;
    const PATTERN = /^[0-9]{1,3}$/;
    fieldValid[`${id}`] = PATTERN.test(value);
    if (!editingTable) showErrorMessageIfInvalid(event);
    buttonEnb();
    return fieldValid[`${id}`];
}
function validateRate(event,id=event.id, editingTable=false) {
    let value = event.value;
    const PATTERN = /^[0-9]{1,3}$/;
    fieldValid[`${id}`] = PATTERN.test(value);
    if (!editingTable) showErrorMessageIfInvalid(event);
    buttonEnb();
    return fieldValid[`${id}`];
}
function validateDescription(event,id=event.id, editingTable=false) {
    let value = event.value;
    const PATTERN = /^[A-Za-z][A-Za-z ]{2,24}$/;
    fieldValid[`${id}`] = PATTERN.test(value);
    if (!editingTable) showErrorMessageIfInvalid(event);
    buttonEnb();
    return fieldValid[`${id}`];
}
function validateStatus(event,id=event.id, editingTable=false) {
    let value = event.value;
    fieldValid[`${id}`] = value !== "null";
    if (!editingTable) showErrorMessageIfInvalid(event);
    buttonEnb();
    return fieldValid[`${id}`];
}
function buttonEnb(){
    let button = document.getElementById('submit');
    let valid = true;
    for (let key in fieldValid) {
        //console.log(`${fieldValid[key]} - ${key}`);
        if (fieldValid[key] === false) {
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

    let images = document.querySelectorAll("#input-section img");
    for (let image of images){
        image.parentElement.removeChild(image);
    }
    disableButton();
}


    function validateAllFields(){
    let id = document.getElementById("id");
    let owner = document.getElementById("owner");
    let title = document.getElementById("title");
    let category = document.getElementById("category");
    let hours = document.getElementById("hours");
    let rate = document.getElementById("rate");
    let status = document.getElementById("status");
    let description = document.getElementById("description");

    if (id.value !== "")   validateProjectId(id);
    if (owner.value !== "") validateOwner(owner);
    if (title.value !== "")validateTitle(title);
    if (category.value !== "null")validateCategory(category);
    if (hours.value != "")validateHours(hours);
    if (rate.value != "")validateRate(rate);
    if (status.value !== "null")validateStatus(status);
    if (description.value !== "")validateDescription(description);
}

function resetAllFields(){
    for (let key in fieldValid) {
        fieldValid[key] = false;
    }
}
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

function editProject(id) {
    id = Number(id.substring(1));
    console.log(id);
    let row = document.createElement("tr");
    row.setAttribute("id", `r${id}`);
    let cell;
    let input;
    let saveImage = document.createElement("img");
    let cancelImage = document.createElement("img");
    cancelImage.setAttribute("src", "../images/cancel.png");
    cancelImage.setAttribute("id", `c${id}`);
    cancelImage.setAttribute(`class`, "table-button");
    saveImage.setAttribute("src", "../images/save.png");
    saveImage.setAttribute("id", `s${id}`);
    saveImage.setAttribute(`class`, "table-button");
    let i = 0;
    console.log(id);
    for (const [key, value] of Object.entries(projArr[id])) {
        cell = row.insertCell(i);
        input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", `edit-${key}`);
        input.setAttribute("value", String(value));
        if (key === "id") {
            input.setAttribute("disabled", "true");
        }
        cell.appendChild(input);
        i++;
    }
    console.log(`ran ${i}`);
    saveImage.onload = () => {
        console.log(`save image loaded`);
        cell = document.createElement("td");
        row.appendChild(cell);
        cell.appendChild(saveImage);
        // Timeout to allow the image to load
        setTimeout(() => {
            console.log(`cancel image loaded`);
            cell = document.createElement("td");
            cell.appendChild(cancelImage);
            row.appendChild(cell);
            let oldRow = document.getElementById(`r${id}`);
            tempRow[id] = oldRow.cloneNode(true);
            document.getElementById("proj-table-body").replaceChild(row, oldRow);
        }, 100);
    };
}
function cancelEdit(id) {
    let i = Number(id.substring(1));
    let row = tempRow[i];
    let oldRow = document.getElementById(`r${i}`);
    document.getElementById("proj-table-body").replaceChild(row, oldRow);
}
function saveEdit(id){
    let i = Number(id.substring(1));
    resetAllFields();
    validateProjectId(document.getElementById("edit-id"),"id", true);
    validateHours(document.getElementById("edit-hours"), "hours", true);
    validateRate(document.getElementById("edit-rate"), "rate", true);
    validateDescription(document.getElementById("edit-description"), "description", true);
    validateStatus(document.getElementById("edit-status"), "status", true);
    validateOwner(document.getElementById("edit-owner"), "owner", true);
    validateTitle(document.getElementById("edit-title"), "title", true);
    validateCategory(document.getElementById("edit-category"), "category", true);
    let valid = true;       
    for (let key in fieldValid) {
        if (fieldValid[key] === false) {
            valid = false;
            break;
        }
    }
    if(valid){
        let project = {
            id: document.getElementById("edit-id").value,
            owner: document.getElementById("edit-owner").value,
            title: document.getElementById("edit-title").value,
            category: document.getElementById("edit-category").value,
            status: document.getElementById("edit-status").value,
            hours: document.getElementById("edit-hours").value,
            rate: document.getElementById("edit-rate").value,
            description: document.getElementById("edit-description").value
        }
        projArr.splice(i, 1, project);
        let row = document.createElement("tr");
        row.setAttribute("id", `r${i}`);
        let cell;
        let j = 0;
        for (const [key, value] of Object.entries(projArr[i])) {
            cell = row.insertCell(j);
            cell.innerHTML = String(value);
            j++;
        }
        let editImg = document.createElement('img');
        let trashImg = document.createElement('img');
        editImg.src = '../images/edit.png';
        editImg.setAttribute('id',`e${i}` );
        editImg.setAttribute('class','table-button');
        trashImg.src = '../images/trash.png';
        trashImg.setAttribute('id',`t${i}` );
        trashImg.setAttribute('class','table-button');
        editImg.onload = ()=>{
            cell = document.createElement('td');
            cell.appendChild(editImg)
            row.appendChild(cell);
            setTimeout(()=>{
                cell = document.createElement('td');
                cell.appendChild(trashImg)
                row.appendChild(cell);
                document.getElementById("proj-table-body").replaceChild(row, document.getElementById(`r${i}`));
            },200)
        }
    } else{
        alert("Invalid data entered,not saved");
        resetAllFields();
    }
}
function deleteProject(id){
    if(window.confirm("Are you sure you want to delete this project?")){
        let projId = id.substring(1);
        projArr.splice(projId, 1);
        projRender(getIndexArrFromProjArr(projArr));
    }
}

function searchByKeyword(){
    let keyWord = document.getElementById("query").value;
    let queryStatus = document.querySelector("#query-status");
    let outputSection = document.querySelector("#output-section");
    let tableParent = document.querySelector("#table-parent");
    let indexArr = [];
    if (keyWord === "") {
        if (queryStatus !== null){
            outputSection.removeChild(queryStatus);
        }
        projRender(getIndexArrFromProjArr(projArr));
    }
    else {
        projArr.filter((obj, i) => {
            for (let value of Object.values(obj)){
                if (String(value) === keyWord){
                    indexArr.push(+i);
                    break;
                }
            }
        });
        
        if (queryStatus === null){
            queryStatus = document.createElement("div");
            queryStatus.setAttribute("id", "query-status");
        }
        outputSection.insertBefore(queryStatus, tableParent);
        queryStatus.textContent = `Found ${indexArr.length} projects for the keyword "${keyWord}"`;
        projRender(indexArr);
    }
}
function indexInArr(i, arr){
    for (let j in arr){
        if (i === arr[j]){
            return true;
        }
    }
    return false;
}
function getIndexArrFromProjArr(projArr){
    let indexArr = [];
    for (let i in projArr){
        indexArr.push(+i);
    }
    return indexArr;
}

let projArrInStorageName = "projects";

function saveAllProjects(){
    if (projArr.length == 0){
        alert("There are no projects to save");
        return;
    } else if (window.confirm("Are you sure you want to save these projects? Projects that are already in storage will be overwritten")) {
        localStorage.setItem(projArrInStorageName, JSON.stringify(projArr));
    }
}

function clearStorage(){
    if (window.confirm("Are you sure you want to delete all projects in storage?")){
        localStorage.removeItem(projArrInStorageName);
    }
}


