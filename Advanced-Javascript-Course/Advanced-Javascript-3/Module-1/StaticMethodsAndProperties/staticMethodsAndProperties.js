class Employee {
  static employeeCount = 0;
  constructor(name) {
    this.name = name;
    Employee.employeeCount++;
  }

  static getEmployeeCount() {
    return Employee.employeeCount;
  }
}

const employee1 = new Employee('Alice');
const employee2 = new Employee('Bob');
