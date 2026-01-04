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

let expenseList = []

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

    renderExpenses()

})

function renderExpenses(){
    expenseTable.innerHTML = ``

    expenseList.forEach(item => {
        expenseTable.innerHTML += `
                <tr class="border-b">
                    <td class="p-2">${item.name}</td>
                    <td class="p-2">${item.amount}</td>
                    <td class="p-2">${item.item_category}</td>
                    <td class="p-2">${item.input_date}</td>   
                </tr>
        
                                   `
    })
}


