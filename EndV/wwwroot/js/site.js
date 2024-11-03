// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// Для шторки с вкладки

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('mouseenter', function () {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function () {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});

// Виджет

document.getElementById('toggle-button').addEventListener('click', function () {
    const widget = document.getElementById('widget');
    widget.classList.toggle('open'); // переключает класс open
});

//Для перенаправления на форму
function redirectToPage() {
    window.location.href = "Form"; // 
}


// Для карусели карточек



// Для перемещения на определенный элемент(якорные ссылки)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({ //прокрутка до элемента
            behavior: 'smooth'
        });
    });
});

