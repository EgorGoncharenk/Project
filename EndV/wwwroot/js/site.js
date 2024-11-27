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


// Для обратной связи

document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Получите входное значение
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Простая проверка данных в форме
    if (name && email && feedback) {
        alert(`Спасибо, ${name}! Ваш отзыв отправлен.`);
        document.getElementById('feedbackForm').reset();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

// Для обратной связи для виджета

    const contactInfo = document.querySelector('.show-contact-info');
    const contactList = document.querySelector('.contact-list');

        contactInfo.addEventListener('mouseenter', () => {
        contactList.style.display = 'block';
        });

        contactInfo.addEventListener('mouseleave', () => {
        contactList.style.display = 'none';
        });

        contactList.addEventListener('mouseenter', () => {
        contactList.style.display = 'block';
        });

        contactList.addEventListener('mouseleave', () => {
        contactList.style.display = 'none';
        });

// Для перемещения формы регистрации

document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Остановить отправку формы

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    // Проверяем, исполнилось ли пользователю 16 лет
    if (age < 16 || (age === 16 && today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate()))) {
        document.getElementById('error').innerText = 'Вы должны быть старше 16 лет для регистрации.';
    } else {
        document.getElementById('error').innerText = '';
        // Здесь можно добавить код для успешной регистрации
        alert('Регистрация успешна!');
    }
});



// Для перемещения на определенный элемент(якорные ссылки)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({ //прокрутка до элемента
            behavior: 'smooth'
        });
    });
});

