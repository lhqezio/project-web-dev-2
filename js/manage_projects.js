function addProject() {
    let project = {
        id: document.getElementById('id').value,
        owner: document.getElementById('owner').value,
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        hours: document.getElementById('hours').value,
        rate: document.getElementById('rate').value,
        description: document.getElementById('description').value,
        status: document.getElementById('status').value,
    }
    projArr.push(project);
    disableButton();
    projRender();
    clearFields();
}
function projRender() {
    let projTable = document.createElement('tbody');

    projArr.forEach(tableCreator)
    function tableCreator(elem,i){
        let editImg = document.createElement('img')
        let trashImg = document.createElement('img')
        editImg.src = '../images/edit.png';
        editImg.setAttribute('id',`e${i}` );
        editImg.setAttribute('class','table-button');
        trashImg.src = '../images/trash.png';
        trashImg.setAttribute('id',`t${i}` );
        trashImg.setAttribute('class','table-button');
        let row = projTable.insertRow(i)
        let cell = row.insertCell(0)
        cell.innerHTML = elem.id
        cell = row.insertCell(1)
        cell.innerHTML = elem.owner
        cell = row.insertCell(2)
        cell.innerHTML = elem.title
        cell = row.insertCell(3)
        cell.innerHTML = elem.category
        cell = row.insertCell(4)
        cell.innerHTML = elem.status
        cell = row.insertCell(5)
        cell.innerHTML = elem.hours
        cell = row.insertCell(6)
        cell.innerHTML = elem.rate
        cell = row.insertCell(7)
        cell.innerHTML = elem.description
        editImg.onload = ()=>{
            cell = row.insertCell(8)
            cell.appendChild(editImg)
        }
        trashImg.onload = ()=>{
            cell = row.insertCell(9)
            cell.appendChild(trashImg)
        }
        
    }
    document.getElementById('proj-table').replaceChild(projTable, document.getElementById('proj-table').lastChild);
}