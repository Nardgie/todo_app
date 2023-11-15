var addButton = document.querySelector(".button.add #add-todo");
// Initialize todo array

// On page load, render all todos
window.onload = function() {
    var todosArray = JSON.parse(localStorage.getItem("todos")) || [];
    for (let i = 0; i < todosArray.length; i++) {
        createTodo(todosArray[i].text, todosArray[i].completed)
    }

    // var todos = document.querySelector("#current");
    // todosArray.forEach(function(todosArray){
    //     createTodo(todosArray.text, todosArray.completed);
    // });
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

    //add event listener to form
    newForm.addEventListener("submit", function(e){
        e.preventDefault();
        var todoText = newText.value;
        newForm.reset();
        createTodo(todoText, false, newForm);

        todosArray.push({text: todoText, completed: false});
        updateTodosArray(todoText, false);
        localStorage.setItem("todos", JSON.stringify(todosArray));
        //newForm.remove();

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

        function createTodo(text, completed) {
        var newTodo = document.createElement("div");
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.checked = completed;
        if(completed) {        // Think about refactoring here. Could go in eventlistener
            newTodo.classList.add("crossed");
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
            //updateTodosArray(text, checkbox.checked)
            for (let i = 0; i< todosArray.length; i++) {
                if (todosArray[i].text === text) {
                    todosArray[i].completed = checkbox.checked;
                    localStorage.setItem("todos", JSON.stringify(todosArray));
                }
            }
        });
        //outside of event listener but in createTodo function
        newTodo.appendChild(checkbox);
        newTodo.appendChild(document.createTextNode(text));
        var todos = document.querySelector("#current");
        todos.appendChild(newTodo);

        //updateTodosArray(text, completed);

    
    }

// updateTodoArray function to handle updating the todo array
    function updateTodosArray(text, completed) {
        var index = todosArray.findIndex(function(todosArray){
            return todosArray.text === text;
        });
        if (index !== -1) {
            todosArray[index].completed = completed;
        } 
    }
    
console.log(todosArray);
};



// createTodo function to handle todo creation



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
