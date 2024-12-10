const user = {
    name: '',
    lastname: ''
}

document.getElementById('send').addEventListener('click', function (e) {
    e.preventDefault();
    printStorage();
    recovery();
});
function printStorage() {
    localStorage.setItem('persons', JSON.stringify(user));
}
function recovery() {
    let recovered = JSON.parse(localStorage.getItem('persons'));
    /* console.log(recovered);*/
    document.getElementById('inputGroup-sizing-lg').innerText = `La persona si chiama ${recovered.name} ${recovered.lastname}`;
}
class User {
    constructor(_name, _lastname) {
        this.name = _name;
        this.lastname = _lastname;

    }
}
const newUser = new User();

console.log(newUser);

localStorage.setItem('persons', JSON.stringify(newUser));

document.getElementById('username');
document.getElementById('lastname');

for (let i = 0; i < newUser.name.length; i++) {
    if (i === newUser.name.length) {
        document.getElementById('username').innerHTML += newUser.name[i];
    }
    for (let o = 0; i < newUser.name.length; o++) {
        if (o === newUser.lastname.length) {
            document.getElementById('lastname').innerHTML += newUser.lastname[o];
        }

    }
}

function removeFromLocalStorage() {
    localStorage.removeItem('persons');
    updateSavedName();
}

document.getElementById('username');
document.getElementById('lastname');
const newPersons = [];
const addUser = document.getElementById('send');
const lastName = document.getElementById('lastname');
const userName = document.getElementById('username');
const userList = document.getElementById('userList');

addUser.addEventListener('click', function (e) {
    e.preventDefault();
    let name = userName.value;
    let lastname = userSurname.value;

    createObject(name, lastname);
});
function createObject(name, lastname) {


    const newUser = new User(name, lastname);
    newPersons.push(addUser);
    /* console.log(newPersons);*/
    printPersons();
    document.getElementById('remove').reset();
}
function printPersons() {
    userList.innerHTML = '';
    for (let i = 0; i < newPersons.length; i++) {
        let newLi = document.createElement('li');
        newLi.innerText = '${newPersons[i].name} ${newPersons[o].surname}}';
    }
}
/*--------*/
let time = sessionStorage.getItem('time');

function printStorage() {
    sessionStorage.setItem('time', JSON.stringify(time));
}

function initializeCounter() {


    if (time === null) {

        time = 0;
        sessionStorage.setItem('time', time);
    }
    return parseInt(time);
}

time = initializeCounter();

function updateCounter() {
    time++;

    document.getElementById('counter').innerText = `${time} secondi`;
}

setInterval('updateCounter', 1000);

document.getElementById('counter').innerText = `${time} secondi`;