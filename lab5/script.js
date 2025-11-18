document.getElementById("themeBtn").onclick = function () {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
};

let modal = document.getElementById("modal");
let open = document.getElementById("openModal");
let close = document.getElementById("closeModal");

open.onclick = () => modal.style.display = "flex";
close.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

document.getElementById("burgerBtn").onclick = function () {
    document.getElementById("navMenu").classList.toggle("active");

    let menu = document.getElementById("navMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

function tabSwitch(new_tab, new_content) {

    document.getElementById('content_1').style.display = 'none';
    document.getElementById('content_2').style.display = 'none';
    document.getElementById('content_3').style.display = 'none';
    document.getElementById(new_content).style.display = 'block';

    document.getElementById('tab_1').className = '';
    document.getElementById('tab_2').className = '';
    document.getElementById('tab_3').className = '';
    document.getElementById(new_tab).className = 'active';
}
