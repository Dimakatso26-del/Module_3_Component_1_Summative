
// ===========================================
// FETCH HTML ELEMENTS
// SECTION A
// ===========================================

const runTasksButton = document.getElementById("runTasksButton");
const outputElement = document.querySelector("runTasksButton");

// ===========================================
// DATA
// ===========================================

export const marks = [45, 60, 85, 30, 95];

// ===========================================
//SECTION B TASKS
// Complete the functions below.
// Do NOT change the function names.
// ===========================================

// Task 1 
export function addMark() {
    //add 70 to the end of the marks array
    // Return the updated marks array
    let marks = marks.add(function(marks));
    console.log(marks)
}

// Task 2
export function getMarksOver60() {
    // Return marks greater than 60
    let marks = marks.filter(function(marks));
    return marks > 60
}
console.log(marks)
// Task 3
export function increaseMarksBy5() {
    // Return a new array where each mark is increased by 5
    let marksforEach = marks.forEach(function(marks));
    return mark + 5
}
console.log(marks)
// Task 4
export function getTotalMarks() {
    // Return the total of all marks
    let totalmarks = marks.add(function(marks)); 
}
console.log(totalmarks)
// Task 5
export function findFirstMarkOver80() {
    // Return the first mark greater than 80
    let marks = marks.includes(function(mark));
    return marks > 80
    

}
console.log(marks)
// Task 6
export function sortMarksLowestToHighest() {
    // Return marks sorted from lowest to highest
    
}

// ===========================================
// PROVIDED FUNCTIONS
// DO NOT EDIT
// ===========================================

export function displayResult(taskName, result) {

    const paragraph = document.createElement("p");

    paragraph.textContent = `${taskName}: ${result}`;

    if (outputElement) {
        outputElement.appendChild(paragraph);
    }

    console.log(taskName, result);
}

export function runTasks() {

    if (outputElement) {
        outputElement.innerHTML = "";
    }

    displayResult("Task 1", addMark());
    displayResult("Task 2", getMarksOver60());
    displayResult("Task 3", increaseMarksBy5());
    displayResult("Task 4", getTotalMarks());
    displayResult("Task 5", findFirstMarkOver80());
    displayResult("Task 6", sortMarksLowestToHighest());

}
addEventListener = document.querySelector(button id)
// ===========================================
// ADD EVENT LISTENER
// SECTION A 
// ===========================================

runTasksButton