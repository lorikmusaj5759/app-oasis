/* 
Filename: AdvancedDataManipulation.js
Description: This code demonstrates advanced data manipulation techniques using JavaScript arrays and objects.
*/

// Create an array of objects representing employees
const employees = [
  { id: 1, name: 'John Doe', department: 'Finance', salary: 50000 },
  { id: 2, name: 'Jane Smith', department: 'Sales', salary: 60000 },
  { id: 3, name: 'Mike Johnson', department: 'IT', salary: 70000 },
  { id: 4, name: 'Jennifer Wilson', department: 'Marketing', salary: 55000 }
  // ... more employee objects
];

// Function to get total salary for all employees
function getTotalSalary() {
  let totalSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
  }
  return totalSalary;
}

// Function to get the employee with the highest salary
function getHighestPaidEmployee() {
  let highestPaidEmployee = employees[0];
  for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highestPaidEmployee.salary) {
      highestPaidEmployee = employees[i];
    }
  }
  return highestPaidEmployee;
}

// Function to filter employees by department
function filterEmployeesByDepartment(department) {
  return employees.filter(employee => employee.department === department);
}

// Function to sort employees by salary in descending order
function sortEmployeesBySalaryDescending() {
  return employees.sort((a, b) => b.salary - a.salary);
}

// Calculate the total salary of all employees
const totalSalary = getTotalSalary();
console.log(`Total salary: ${totalSalary}`);

// Get the employee with the highest salary
const highestPaidEmployee = getHighestPaidEmployee();
console.log(`Highest paid employee: ${highestPaidEmployee.name} (${highestPaidEmployee.salary})`);

// Filter employees by department
const salesEmployees = filterEmployeesByDepartment('Sales');
console.log('Sales Employees:');
console.log(salesEmployees);

// Sort employees by salary in descending order
const sortedEmployees = sortEmployeesBySalaryDescending();
console.log('Employees Sorted by Salary (Descending):');
console.log(sortedEmployees);

// ... more advanced data manipulation operations

// End of code