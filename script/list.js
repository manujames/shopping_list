let box = document.getElementById('box');

function buildBox(){
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3 && this.status == 200){
            box.innerHTML = "<h3 class='text-center'>Loading...</h3>";
        }
        else if(this.readyState == 4 && this.status == 200){
            let items = JSON.parse(this.responseText).items;
            let htmlContent = "<table class='table table-hover'>";
            htmlContent += "<tr class='table-success'><th>Item Code</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>"
            for (let i in items){
                htmlContent += "<tr>"
                htmlContent += `<td>${items[i].sno}</td>`;
                htmlContent += `<td>${items[i].name}</td>`;
                htmlContent += `<td>${items[i].qty}</td>`;
                htmlContent += `<td>${items[i].unit}</td>`;
                htmlContent += `<td>${items[i].department}</td>`;
                htmlContent += `<td>${items[i].notes}</td>`;
                htmlContent += "</tr>";
            }
            htmlContent += "</table>";
            box.innerHTML = htmlContent;
        }
        else if(this.status == 404){
            box.innerHTML = "<h3 class='text-center'>404! List not found.</h3>";
        }
        else{
            box.innerHTML = "<h3 class='text-center'>Sorry! Something went wrong.</h3>";
        }
    };
    
    xhttp.open("GET", "../json/list.json",true);
    xhttp.send();
}

window.addEventListener('load',buildBox);
