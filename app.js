const formLogin = document.getElementById('loginForm');
if (formLogin) {
    formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorContainer = document.getElementById('errorContainer');

    // Validate the login
    if (email === 'abc@contoh.com' && password === 'asdqwe123') {
        alert('Anda Berhasil Login!');
        // Redirect to another page or perform any desired action
        location.replace('order.html');
    } else {
        var errorMessage = document.createElement('div');
        errorMessage.textContent = 'Email atau password salah.';
        errorMessage.classList.add('alert');
        errorContainer.innerHTML = '';
        errorContainer.appendChild(errorMessage);
    }
});
}

function calculateCost() {
    console.log("asd");
    var menuItems = document.getElementsByName('menu');
    var totalEl = document.getElementById('totalCost');
    var totalCost = 0;

    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            totalCost += parseInt(menuItems[i].value);
            menuItems[i].parentNode.style.backgroundColor = 'green';
            menuItems[i].parentNode.style.color = 'white';
        } else {
            menuItems[i].parentNode.style.backgroundColor = '#eee';
            menuItems[i].parentNode.style.color = 'initial';
        }
    }

    totalEl.textContent = 'Rp ' + totalCost.toLocaleString();
}