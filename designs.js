// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {
    let width = document.getElementById("inputWidth").value;
    let height = document.getElementById("inputHeight").value;
    createTable(width, height);
    return false;
}

function createTable(width, height) {
    let table = document.getElementById("pixelCanvas");
    table.innerHTML = "";
    let tbody = document.createElement('tbody');
    for (let i = 0; i < height; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < width; j++) {
            let td = document.createElement('td');
            td.appendChild(document.createTextNode('\u0020'));
            td.setAttribute('onclick',"tdClick(this);");
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
}

function tdClick(td)
{
    let color = document.getElementById("colorPicker").value;

    console.log(color);
    console.log(td);
    td.style.backgroundColor = color;
}
