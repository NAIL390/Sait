function showTab(tabId) {
    // Скрываем все вкладки
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Отображаем выбранную вкладку
    document.getElementById(tabId).classList.add('active');
}

function registerUser(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения полей
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка, что поля не пустые
    if (username && email && password) {
        document.getElementById('registrationMessage').innerText = `Registration successful! Welcome, ${username}!`;
        document.getElementById('registrationMessage').style.color = 'green';

        // Очистка полей
        document.getElementById('registrationForm').reset();
    } else {
        document.getElementById('registrationMessage').innerText = 'Please fill out all fields.';
        document.getElementById('registrationMessage').style.color = 'red';
    }
}
