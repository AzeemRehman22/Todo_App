
    


    var table = document.getElementById("table")
    var text = document.getElementById("text")
    var row,c1,c2,c3
    var count = 1;

    function add(){

        row = document.createElement("tr")
        row.style.height = "40px"

        c1 = document.createElement("td")
        c2 = document.createElement("td")
        c3 = document.createElement("td")

        c1.setAttribute("class","c1")
        c2.setAttribute("class","c2")
        c3.setAttribute("class","c3")

        // create delete button
    var delet = document.createElement("button")
    var delettxt = document.createTextNode("DELETE")
    delet.setAttribute("class","delet")
    delet.setAttribute("onclick","delet_item(this)")
    delet.appendChild(delettxt)

        // create Edit button
    var edit = document.createElement("button")
    var edittxt = document.createTextNode("EDIT")
    edit.setAttribute("class","edit")
    edit.setAttribute("onclick","edit_item(this)")
    edit.appendChild(edittxt)


        if(text.value == ""){
            alert("please enter the value what you want.")
        }
        else{
            c1.innerHTML = count ++
            c2.innerHTML = text.value;
            c3.appendChild(edit)
            c3.appendChild(delet)
            row.appendChild(c1)
            row.appendChild(c2)
            row.appendChild(c3)
            table.appendChild(row)
        }

        text.value = "";

}
function delet_item(e){

 e.parentNode.parentNode.remove();

}

function edit_item(e){
    var val = c2.innerHTML;
    var edit_value = prompt("Eneter the new value",val)
    c2.innerHTML = edit_value;
}

function delete_all(){
count = 1;
  table.innerHTML = ""
}


// var list = document.getElementById("list");