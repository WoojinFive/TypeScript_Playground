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
    static createEmployee(name) {
        return { name: name };
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
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('AAA');
console.log(employee1, Department.fiscalYear);
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
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Hello';
console.log(accounting.mostRecentReport);
accounting.describe();
accounting.printEmployeeInformation();
accounting.printReport();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
