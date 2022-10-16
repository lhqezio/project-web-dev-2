"use strict";

function createProjectObject() {
    let project = {
        id: document.getElementById('id').value,
        owner: document.getElementById('owner').value,
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        hours: document.getElementById('hours').value,
        rate: document.getElementById('rate').value,
        status: document.getElementById('status').value,
        description: document.getElementById('description').value
    }
    addProject(project);
}

function addProject(project){
    projArr.push(project);
    let tbody = document.querySelector('tbody');
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let i = 0;
    for (let value of Object.values(project)){
        let td = tr.insertCell(i);
        td.textContent = value;
        i++;
    }

    let editImgTd = tr.insertCell(8);
    let editImg = document.createElement("img");
    editImg.setAttribute("src", "../images/edit.png");
    editImg.setAttribute("class","edit");
    editImg.classList.add("edit-delete");

    let deleteImgTd = tr.insertCell(9);
    let deleteImg = document.createElement("img");
    deleteImg.setAttribute("src", "../images/trash.png");
    deleteImg.setAttribute("class","edit");
    deleteImg.classList.add("edit-delete");

    editImg.onload = () => {
        editImgTd.appendChild(editImg);
    }
    deleteImg.onload = () => {
        deleteImgTd.appendChild(deleteImg);
    }
}