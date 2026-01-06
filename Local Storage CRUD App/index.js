let formEl = document.getElementById('form');
let nameEl = document.getElementById('name');
let ageEl = document.getElementById('age');
let emailEl = document.getElementById('email');
let addressEl = document.getElementById('address');
let addBtn = document.getElementById('add');
let dataListEl = document.getElementById('data-list');


let data = []

addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const dataName = nameEl.value;
    const dataAge = Number(ageEl.value);
    const dataEmail = emailEl.value;
    const dataAddress = addressEl.value;

    const newData = {
        name: dataName,
        age: dataAge,
        email: dataEmail,
        address: dataAddress
    }

    data.push(newData);

})