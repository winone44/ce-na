//mobile menu
document.getElementById("mobile-menu-trigger").addEventListener("click", function () {
    let myDiv = document.getElementById("nav-links");
    if (myDiv.style.display === "flex") {
        myDiv.style.display = "none";
    } else {
        myDiv.style.display = "flex";
    }
});