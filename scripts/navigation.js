function openNav() {
    document.getElementById("NavBar").style.width = "100%";
}

function closeNav() {
    document.getElementById("NavBar").style.width = "0%";

    var buttons = document.getElementById("NavBar");
    
    buttons.onclick = function (CurElem) {
        if (CurElem.target.id == "ItemHome") {
            document.getElementById("MenuActive").innerHTML = "Home ☰";
        } else if (CurElem.target.id == "ItemShop") {
            document.getElementById("MenuActive").innerHTML = "Shop ☰";
        } else if (CurElem.target.id == "ItemActivities") {
            document.getElementById("MenuActive").innerHTML = "Activities ☰";
        } else if (CurElem.target.id == "ItemContact") {
            document.getElementById("MenuActive").innerHTML = "Contact ☰";
        }
    }
}
