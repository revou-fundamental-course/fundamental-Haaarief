// Javascript
var modal = document.getElementById('myModal');


window.onload = function() {
    modal.style.display = "center";
}

function closeModal() {
    modal.style.display = "none";
}


function saveUsername() {
    var username = document.getElementById('username').value;
    var greeting = document.getElementById('greeting');
    greeting.textContent = `Hi ${username}, Welcome to the website`;
    closeModal(); 
}

function validateForm() {
    let name = document.getElementById('name').value;
    let birthDate = document.getElementById('datebirth').value;

    let gender= document.querySelector('input[name="gender"]:checked')
    let genderValue = gender ? gender.value : 'Belum Dipilih';

    let message = document.getElementById('message').value;

    let displayBox = document.getElementById('displayBox');
    displayBox.innerHTML = `
        <div class="display-box">
            <p>Nama : ${name}</p>
            <p>Tanggal Lahir : ${birthDate}</p>
            <p>Gender : ${genderValue}</p>
            <p>Message : ${message}</p>
        </div>
    `;
}
