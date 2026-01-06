let formEl = document.getElementById('form');
let nameEl = document.getElementById('name');
let ageEl = document.getElementById('age');
let emailEl = document.getElementById('email');
let addressEl = document.getElementById('address');
let addBtn = document.getElementById('add');
let dataListEl = document.getElementById('data-list');
let modalEl = document.getElementById('modal-element');
let closeModalBtn = document.getElementById('close-modal');


let data = JSON.parse(localStorage.getItem('data')) || []

addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const dataName = nameEl.value;
    const dataAge = Number(ageEl.value);
    const dataEmail = emailEl.value;
    const dataAddress = addressEl.value;

    if(dataName === null  || dataName === '') {
        openModal()
        return
    }

    const newData = {
        id: Date.now(),
        name: dataName,
        age: dataAge,
        email: dataEmail,
        address: dataAddress
    }

    data.push(newData);
    localStorage.setItem('data', JSON.stringify(data));

    renderData()

    nameEl.value = '';
    ageEl.value = '';
    emailEl.value = '';
    addressEl.value = '';
})

function renderData(){
    dataListEl.innerHTML = ``;

    data.forEach((item) => {
        dataListEl.innerHTML += `
                    <tr class="border-b border-white">
                        <td class="p-2 text-center text-white">${item.name}</td>
                        <td class="p-2 text-center text-white">${item.age}</td>
                        <td class="p-2 text-center text-white">${item.email}</td>
                        <td class="p-2 text-center text-white">${item.address}</td> 
                        <td id="delete" class="p-2 text-center">
                            <button onclick="deleteData(${item.id})" class="bg-red-500 lg:px-3 rounded text-white">DELETE</button>
                            
                            <button onclick="editData(${item.id})" class="bg-yellow-500 lg:px-3 rounded text-white">
                              EDIT
                            </button>
                        </td>  
                    </tr>
        `
    })
}


function deleteData(idToDelete){
    data = data.filter(item => item.id !== idToDelete)
    localStorage.setItem('data', JSON.stringify(data));

    renderData()
}

function editData(idToEdit){
    data = data.filter(item => item.id !== idToEdit)

    nameEl.value = ''
    ageEl.value = ''
    emailEl.value = ''
    addressEl.value = ''
    addBtn.textContent = 'SAVE'

    localStorage.setItem('data', JSON.stringify(data));
}

function openModal(){
    modalEl.classList.remove('hidden');

    // modalEl.addEventListener('mouseenter', () => {
    //     modalEl.classList.add('hidden');
    // })
}

function closeModal(){
    modalEl.classList.add('hidden');
}

closeModalBtn.addEventListener('click', closeModal)


renderData()

