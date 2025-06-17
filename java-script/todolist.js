const Taskadd = document.getElementById("AddTask");
let tasks = [];

function addtasktolist(){
    let inptask = document.getElementById("Task").value;
    tasks.push(inptask);
    console.log(tasks);
    document.getElementById("Task").value = "";
}
Taskadd.onclick = addtasktolist;
