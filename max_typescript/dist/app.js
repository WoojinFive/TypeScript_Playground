"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}
const itDepart = new ITDepartment('d1', ['aaa']);
itDepart.addEmployee('AAA');
itDepart.addEmployee('BBB');
console.log(itDepart);
const accounting = new AccountingDepartment('d1', []);
accounting.addEmployee('Tom');
accounting.addEmployee('Janny');
accounting.addReport('Report1');
// accounting.employees[2] = 'Anna';
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();
accounting.printEmployeeInformation();
accounting.printReport();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
