let clickCount = 3;

function password() {
    let pas = document.getElementById('password').value;
    let user = document.getElementById('username').value;
    const btn = document.getElementById('btn');

    if (user === 'SuMa_11' && pas === '2113') {
        window.alert('Welcome sks44!');
        window.location.href = ("dashboard.html");

        window.location.replace("dashboard.html");
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