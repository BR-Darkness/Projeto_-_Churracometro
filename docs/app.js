function theme()
{
    document.body.classList.toggle("dark-theme");
    (localStorage.getItem("theme") === "dark") ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark");
}

let prevScrollpos = window.scrollY;
window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    (prevScrollpos >= currentScrollPos) ? document.getElementById("Menu").style.top = "0" : document.getElementById("Menu").style.top = "-90px";
    prevScrollpos = currentScrollPos;
}

if (localStorage.getItem("theme") === "dark") document.body.classList.toggle("dark-theme");
