const people = [];
const salaries = [];

window.onload = function() {
    document.getElementById("addSalaryButton").onclick = addSalary;
    document.getElementById("displayResultsButton").onclick = displayResults;
    document.getElementById("displaySalaryButton").onclick = displaySalary;
}

function addSalary() {
    people.push(document.getElementById("workers").value);
    salaries.push(document.getElementById("salary").value);
}

function displayResults() {
    document.getElementById("results").innerHTML = "<h3>Results</h3><p>Average Salary: $" + averageSalary() + "<br><p>Highest Salary: $" + highestSalary();

}

function displaySalary() {
    var table = "<h3>Table Salaries</h3><table><tr><th>Worker</th><th>Salary</th></tr>";
    for(let i=0;i<people.length;i++) {
        table +="<tr><td>" + people[i] + "</td><td> $" + salaries[i] + "</td></tr>";
    }
    table += "</table>";
    document.getElementById("results_table").innerHTML = table;
}

function averageSalary() {
    var total = 0;
    var averageSalary = 0;
    for(let i=0;i<salaries.length;i++) {
        total += parseFloat(salaries[i]);
    }
    averageSalary = total/(salaries.length);
    return averageSalary;
}

function highestSalary() {
    var highest = 0;
    for(i=0; i<salaries.length;i++) {
        if(salaries[i] > highest) {
            highest = parseFloat(salaries[i]);
        }
    }
    return highest;
}