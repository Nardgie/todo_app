var addButton = document.querySelector(".button.add #add-todo");
// Initialize todo array

// On page load, render all todos
window.onload = function() {
    var todosArray = JSON.parse(localStorage.getItem("todos")) || [];


    var todos = document.querySelector("#current");
    todosArray.forEach(function(todosArray){
        createTodo(todosArray.text, todosArray.completed);
    });
};

addButton.addEventListener("click", function(e){
    //create new form element set action to #
    var newForm = document.createElement("form");
    newForm.setAttribute("action", "#");
    //create new input element set type to text
    var newSubmit = document.createElement("input");
    var newText = document.createElement("input");
    newText.setAttribute("type", "text");
    newSubmit.setAttribute("type", "submit");
    newSubmit.setAttribute("value", "add todo");
    //find section and append form to section
    var adding = document.querySelector("#adding");
    adding.appendChild(newForm);
    //append input elements to form
    newForm.appendChild(newText);
    newForm.appendChild(newSubmit); 
    //addTodo();
    //add event listener to form
    //submitTodo();
    newForm.addEventListener("submit", function(e){
        e.preventDefault();
        var todoText = newText.value;
        createTodo(todoText, false, newForm);
        
        // var newTodo = document.createElement("div");
        // var checkbox = document.createElement("input");
        // checkbox.setAttribute("type", "checkbox");
    
        // newTodo.appendChild(checkbox);
        // newTodo.appendChild(document.createTextNode(todoText));
        // var todos = document.querySelector("#current");
        // todos.appendChild(newTodo);
        
        

        // checkbox.addEventListener("change", function(e) {
        //     if (checkbox.checked) {
        //         newTodo.classList.add("crossed");
        //         setInterval(function() {
        //             newTodo.remove();
        //         }, 2000);
                
        //     } else {
        //         newTodo.classList.remove("crossed");
        //     }
        // });
        //newForm.remove();
    })
})

// createTodo function to handle todo creation
function createTodo(text, completed, form) {

    var newTodo = document.createElement("div");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = completed;
    if(completed) {        // Think about refactoring here. Could go in eventlistener
        newTodo.classList.add("crossed");
    } else {
        newTodo.classList.remove("crossed");
    }

    checkbox.addEventListener("change", function(e) {
        if (checkbox.checked) {
            newTodo.classList.add("crossed");
            setInterval(function() {
                    newTodo.remove();
                }, 2000);
        } else {
            newTodo.classList.remove("crossed");
        }
        updateTodosArray(text, checkbox.checked)
    });
    newTodo.appendChild(checkbox);
    newTodo.appendChild(document.createTextNode(text));
    var todos = document.querySelector("#current");
    todos.appendChild(newTodo);

    updateTodosArray(text, completed);

    form.remove();
}

// updateTodoArray function to handle updating the todo array
function updateTodosArray(text, completed) {
    var index = todosData.findIndex(function(todosArray){
        return todosArray.text === text;
    });
    if (index !== -1) {
        todosArray[index].completed = completed;
    } else {
        todosArray.push({text: text, completed: completed});
    }
    localStorage.setItem("todos", JSON.stringify(todosArray));
}


//Here we wantto retrieve our todo data from local storage


/*function addTodo() {
    //create new form element set action to #
    var newForm = document.createElement("form");
    newForm.setAttribute("action", "#");
    //create new input element set type to text
    var newSubmit = document.createElement("input");
    var newText = document.createElement("input");
    newText.setAttribute("type", "text");
    newSubmit.setAttribute("type", "submit");
    newSubmit.setAttribute("value", "add todo");
    //find section and append form to section
    var adding = document.querySelector("#adding");
    adding.appendChild(newForm);
    //append input elements to form
    newForm.appendChild(newText);
    newForm.appendChild(newSubmit);
    return newForm;
}

function submitTodo() {
    newForm.addEventListener("submit", function(e){
        e.preventDefault();
        var todoText = newText.value;
        var newTodo = document.createElement("div");
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
    
        newTodo.appendChild(checkbox);
        newTodo.appendChild(document.createTextNode(todoText));
        var todos = document.querySelector("#current");
        todos.appendChild(newTodo);
    });
    return newTodo;
} */
