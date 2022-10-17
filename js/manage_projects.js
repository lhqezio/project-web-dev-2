`use strict`
function addProject() {
    let project = {
        id: document.getElementById('id').value,
        owner: document.getElementById('owner').value,
        title: document.getElementById('title').value,
        category: document.getElementById('category').value,
        status: document.getElementById('status').value,
        hours: document.getElementById('hours').value,
        rate: document.getElementById('rate').value,
        description: document.getElementById('description').value,
    }
    projArr.push(project);
    projRender(getIndexArrFromProjArr(projArr));
}
function projRender(indexArr) {
    console.log(indexArr);
    let projTable = document.createElement('tbody');
    projTable.id = 'proj-table-body';

    projArr.forEach(tableCreator);
    console.log(projArr);
    function tableCreator(elem,i){
        console.log("------");
        console.log(i);
        console.log(indexArr);
        console.log(indexInArr(i, indexArr));
        console.log("------");
        if (!indexInArr(i, indexArr)) { return; }
        let editImg = document.createElement('img')
        let trashImg = document.createElement('img')
        editImg.src = '../images/edit.png';
        editImg.setAttribute('id',`e${i}` );
        editImg.setAttribute('class','table-button');
        trashImg.src = '../images/trash.png';
        trashImg.setAttribute('id',`t${i}` );
        trashImg.setAttribute('class','table-button');
        let row = document.createElement('tr');
        row.id = `r${i}`;
        let cell;
        let j = 0;
        for (const value of Object.values(projArr[i])) {
            cell = row.insertCell(j);
            cell.textContent = String(value);
            j++;
        }
        editImg.onload = ()=>{
            cell = document.createElement('td');
            cell.appendChild(editImg)
            row.appendChild(cell);
            // Timeout to allow the image to load
            setTimeout(()=>{
                cell = document.createElement('td');
                cell.appendChild(trashImg)
                row.appendChild(cell);
                projTable.appendChild(row);
            },200)
        }
    }
    document.getElementById('proj-table').replaceChild(projTable, document.getElementById('proj-table').lastChild);

    // Disable due to debugging purposes
    /**
    clearFields();
    disableButton();
    */
}
