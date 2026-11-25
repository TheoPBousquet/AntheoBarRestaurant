// JavaScript
function openCategory(categoryName) {
    document.querySelectorAll(".category").forEach(categ => {
        categ.style.display = "None";
    });
    document.getElementById(categoryName).style.display = "flex";
}

function highlight(id) {
    document.querySelectorAll(".selectoritem").forEach(selector => {
        selector.classList.remove("highlighted")
    });
    document.getElementById(id).classList.add("highlighted");
}

function removeColor() {
    
}

function colorMenu(id) {
    document.querySelectorAll(".menuitem").forEach(selector => {
        selector.style.color = "white";
    });
    document.getElementById(id).style.color = "#9bcf9b;";
}

function customScrollTo(id) {
    const element = document.getElementById(id);
    var offset = window.innerHeight/100*7;
    const y = element.getBoundingClientRect().top + window.scrollY -offset;
    window.scroll({top: y,behavior:'smooth'});

}