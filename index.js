const todoList = [];
const todoList1 = [];
const todoList2 = [];

renderTodoList();

function taskEnter() {
    if (event.key === 'Enter') {
        addTodo();
    }
}

function taskEnter1() {
    if (event.key === 'Enter') {
        addDisplay();
    }
}

function taskEnter2() {
    if (event.key === 'Enter') {
        addDisplay1();
    }
}


function addTodo() {
    const inputElement = document.querySelector('.js-input');

    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

    document.querySelector('.comment').innerHTML = `<p> <--It takes the value and stores in an array displayed in console</p>`
}


function renderTodoList() {

    let todoListHTML = '';
    
    for (let i = 0; i < todoList1.length; i++) {
        const todo = todoList1[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    }
    
    function addDisplay() {
        const inputElement = document.querySelector('.ip');
        const name = inputElement.value;

        todoList1.push(name);
        console.log(todoList1);
    
        inputElement.value = '';
    
        renderTodoList();

        document.querySelector('.comment1').innerHTML = `<p> <--It takes the value and stores in an array displayed in console while simultaneously displaying the content in a div box below </p>`

    }


function renderTodoList1() {
    let todoListHTML = '';
    for (let i = 0; i < todoList2.length; i++) {
        const todoObject = todoList2[i];
        // const name = todoObject.name;
        // const date = todoObject.date;
        // const {name} = todoObject;
        // const {date} = todoObject;
        const {name, date} = todoObject;
        const html = `
        <div> ${name} </div>
        <div> ${date} </div>
        <button class = "delete-button" onclick = "todoList2.splice(${i}, 1);
        renderTodoList1();
        ">Delete</button>
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list1').innerHTML = todoListHTML;
    }
    
    function addDisplay1() {
        const inputElement = document.querySelector('.ip1');
        const name = inputElement.value;
        const dateInput = document.querySelector('.date-input');
        const date = dateInput.value;
    
    
        todoList2.push({
            name,
            date
        });
        console.log(todoList2);
    
        inputElement.value = '';
    
        renderTodoList1();

        document.querySelector('.comment2').innerHTML = `<p> <--It inputs name and date and stores in an array displayed in console while simultaneously displaying the content in a div box below and providing an option to delete any of the tasks </p>`
    }

// function addDisplay() {
//     const tL = ['ansh', 'bugatti'];

//     const input = document.querySelector('ip');
//     const task = input.value;
//     tL.push(task);

//     let tLHTML = '';

//     for (let i = 0; i<= tL.length; i++) {
//         const t = tL[i];
//         const html = `<p>${t}</p>`;
//         tLHTML += html;
//     }

//     console.log(tLHTML);
// }



// let n = 5;
// for(let i = 1; i<= n; i++){
//     for(let j = 1; j<=i; j++) {
//     console.log('*');
// }
// console.log('\n');
// }