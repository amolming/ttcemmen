function toggleMenu(mobileMenuButton) {
    mobileMenuButton.classList.toggle("change");
    var mobileMenuLinks = document.getElementById("mobileMenuLinks");
    if (mobileMenuLinks.style.display === "block") {
        mobileMenuLinks.style.display = "none";
    } else {
        mobileMenuLinks.style.display = "block";
    }
}
