var addButton = document.querySelector("#add-todo");

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
    //append form to section
    var adding = document.querySelector(".adding");
    adding.appendChild(newForm);
    //append input elements to form
    newForm.appendChild(newText);
    newForm.appendChild(newSubmit);

    //add event listener to form
    newForm.addEventListener("submit", function(e){
        e.preventDefault();
        var todoText = newText.value;
        var newTodo = document.createElement("div");
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
    
        newTodo.appendChild(checkbox);
        newTodo.appendChild(document.createTextNode(todoText));
        var todos = document.querySelector(".todos");
        todos.appendChild(newTodo);
    })
})