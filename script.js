var addButton = document.querySelector(".button.add #add-todo");

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
        var newTodo = document.createElement("div");
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
    
        newTodo.appendChild(checkbox);
        newTodo.appendChild(document.createTextNode(todoText));
        var todos = document.querySelector("#current");
        todos.appendChild(newTodo);
        
        localStorage.setItem("todo", newTodo);

        checkbox.addEventListener("change", function(e) {
            if (checkbox.checked) {
                newTodo.classList.add("crossed");
                setInterval(function() {
                    newTodo.remove();
                }, 2000);
                
            } else {
                newTodo.classList.remove("crossed");
            }
        });
        newForm.remove();
    })
})
//Here we wantto retrieve our todo data from local storage
window.onload = function() {
    localStorage.getItem("todo");
}

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
