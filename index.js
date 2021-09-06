const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const table = document.getElementById("table");
const button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    titleTr();
    authorTr();
    yearTr()
})

function connectTr(){
    return document.createElement("tr"); 
}

const newTr = connectTr();


function titleTr(){

    const getTd = document.createElement("td");
    getTd.innerHTML = getValue(title);
    newTr.appendChild(getTd);
    table.appendChild(newTr)
}

function authorTr(){

    const getTd = document.createElement("td");
    getTd.innerHTML = getValue(author);
    newTr.appendChild(getTd);
    table.appendChild(newTr)
}

function yearTr(){

    const getTd = document.createElement("td");
    getTd.innerHTML = getValue(year);
    newTr.appendChild(getTd);
    table.appendChild(newTr)
}

function getValue(getElement){
    const elementValue = getElement.value;
    return elementValue;
}