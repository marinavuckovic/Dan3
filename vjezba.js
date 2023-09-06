function kreiraj(event){
    event.preventDefault(0);
    let novo=document.getElementById("input").value;
    if(novo){
        document.getElementById("lista").innerHTML+= "<li>"+novo+ "<button>X</button></li>";
    }
}
document.querySelector("input[type=submit]").addEventListener("click", kreiraj);

var lista=document.getElementById("lista");


