let box = document.getElementById('box');
function buildBox(){
    let xhttp = new XMLHttpRequest();
    let listJson;
    xhttp.onreadystatechange = function(){
        if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3 && this.status == 200){
            box.innerHTML = "<h3 class='text-center'>Loading...</h3>";
        }
        else if(this.readyState == 4 && this.status == 200){
            listJson = JSON.parse(this.responseText);
            let htmlContent = "<table>";
            for (let i in listJson.items){
                htmlContent += "<tr><td>";
                // htmlContent += Number(i)+1;
                // htmlContent += "</td><td>"
                htmlContent += listJson.items[i].name;
                htmlContent += "</td></tr>";
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
