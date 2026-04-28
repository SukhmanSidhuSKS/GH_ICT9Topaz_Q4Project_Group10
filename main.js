let clickCount = 3;

function password() {
    let pas = document.getElementById('password').value;
    let user = document.getElementById('username').value;
    const btn = document.getElementById('btn');

    if (user === 'sks44' && pas === '44444444') {
        window.alert('Welcome sks44!');
        window.location.href = ("notebooks.html");

        window.location.replace("notebooks.html");
    } else {
        clickCount--; 
        if (clickCount <= 0) {
            window.alert('No attempts left!');
            btn.disabled = true; 
        } else {
            window.alert('Wrong username/password. ' + clickCount + ' attempts left.');
        }
    }
}
document.getElementById('btn').addEventListener('click', password); 