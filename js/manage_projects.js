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
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        let editImg = document.createElement('img');
        let trashImg = document.createElement('img');
        editImg.src = '../images/edit.png';
        editImg.setAttribute('id',`e${i}` );
        editImg.setAttribute('class','edit');
        trashImg.src = '../images/trash.png';
        trashImg.setAttribute('id',`t${i}` );
        trashImg.setAttribute('class','trash');
        cell.innerHTML = elem.id;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = elem.owner;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = elem.title;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = elem.category;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = elem.status;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = elem.hours;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = elem.rate;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerHTML = elem.description;
        row.appendChild(cell);
        //BUG HERE IMAGE WOULD NOT SHOW
        cell = document.createElement('td');
        cell.appendChild(editImg);
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.appendChild(trashImg);
        row.appendChild(cell);
        projTable.appendChild(row);
    }
    document.getElementById('proj-table').replaceChild(projTable, document.getElementById('proj-table').lastChild);
}