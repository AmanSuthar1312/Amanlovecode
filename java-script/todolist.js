function submitTask(){
    const tasksubmit = document.getElementById("taskAdd").value.trim();

    if(tasksubmit === ""){
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = tasksubmit;

    checkbox.addEventListener("change", function(){
        span.classList.toggle("completed", this.checked);
    });
    
    li.appendChild(checkbox);
    
    li.appendChild(span);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskAdd").value = "";
}
