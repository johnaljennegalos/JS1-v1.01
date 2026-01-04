let expenseName = document.getElementById('expense-name');
let amount = document.getElementById('amount');
let category = document.getElementById('category');
let food = document.getElementById('food');
let transpo =  document.getElementById('transpo');
let electricity = document.getElementById('electricity');
let dateEl = document.getElementById('date');
let addBtn = document.getElementById('add-btn');
let formEl = document.getElementById('form');
let expenseTable = document.getElementById('expenses-list');
let deleteBtn = document.getElementById('delete');

let expenseList = JSON.parse(localStorage.getItem('expenses')) || [];

addBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const expense_name = expenseName.value;
    const expense_amount = Number(amount.value);
    const categories = category.value;
    const date_element = dateEl.value;

    const newExpense = {
        id: Date.now(),
        name: expense_name,
        amount: expense_amount,
        item_category: categories,
        input_date: date_element
    }

    expenseList.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenseList));

    renderExpenses()

})

function renderExpenses(){
    expenseTable.innerHTML = ``

    expenseList.forEach(item => {
        expenseTable.innerHTML += `
                <tr class="border-b">
                    <td class="p-2 text-center">${item.name}</td>
                    <td class="p-2 text-center">${item.amount}</td>
                    <td class="p-2 text-center">${item.item_category}</td>
                    <td class="p-2 text-center">${item.input_date}</td> 
                    <td id="delete" class="p-2 text-center"><button onclick="deleteExpense(${item.id})" class="bg-red-500 px-3 rounded text-white">DELETE</button></td>  
                </tr>
                          `
    })
}

function deleteExpense(idToDelete){
    expenseList = expenseList.filter(item => item.id !== idToDelete)

    localStorage.setItem('expenses', JSON.stringify(expenseList));

    renderExpenses()
}


renderExpenses()

