document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const body = document.body;
    const menuLinks = document.querySelectorAll(".menu-link");

    // ハンバーガーメニューのクリックでメニューを開閉
    hamburger.addEventListener("click", function() {
        body.classList.toggle("menu-open");
    });

    // メニューリンクをクリックしたらメニューを閉じる
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            body.classList.remove("menu-open");
        });
    });
});