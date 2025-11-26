let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function openTab (tabName){
    for ( tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
};

// ====================side menu=========================

let sideMenu = document.getElementById("sideMenu");
function openMenu() {
    sideMenu.style.right = "0"
}
function closeMenu() {
    sideMenu.style.right = "-200px"
}
