let completedTasks = document.querySelector(".completed_tasks")
let tasksClick = document.getElementById("btn")
let compCount = document.getElementById("comp_tasks")
let openCount = document.getElementById("open_tasks")

function taskChanger() {
    
    completedTasks.addEventListener("click", function() {
    
    let ask = confirm("Are you sure you want to change the number of tasks?")
        
    if (ask == true) {   
    let number = parseInt(compCount.innerText)
    let number2 = parseInt(openCount.innerText)
  
    let counter = number + 1
    let counter2 = number2 - 1
    
    if (counter2 != -1) {
    let value = counter++
    let value2 = counter2--
    compCount.innerText = value
    openCount.innerText = value2
}
} else {
    alert("Ok")
}
})}
window.onload = taskChanger











