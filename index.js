const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const table = document.getElementById("table");
const button = document.getElementById("btn")

button.addEventListener("click", () => {
    
    if (title.value.length && author.value.length && year.value.length) {
        const newTr =document.createElement("tr")
        newTr.innerHTML =
        `
            <td>${title.value}</td>
            <td>${author.value}</td>
            <td>${year.value}</td>
        `
        
        table.appendChild(newTr)

        title.value=''
        author.value=''
        year.value=''
    }
});
