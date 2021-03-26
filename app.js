const form = document.querySelector('form');
const expenseList = document.querySelector('#expensesList');

//add expense item on submit
form.addEventListener('submit', function(e){
    e.preventDefault();
    addExpense();
})

//function for adding expense item to table
addExpense = () => {
    const newTr = document.createElement('tr');
    const deleteBtn = document.createElement('button');
    for(let i = 0; i < 3; i++){
        const newTd = document.createElement('td');
        newTd.textContent = form[i].value;
        newTr.append(newTd);
    }
    deleteBtn.classList.add("delete");
    newTr.append(deleteBtn);
    expenseList.append(newTr);
}

//delete button functionality
expenseList.addEventListener('click', function(e){
        e.target.parentNode.remove();
})



//to do: styling