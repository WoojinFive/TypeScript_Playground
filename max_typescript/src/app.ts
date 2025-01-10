class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'Hello';
console.log(accounting.mostRecentReport);

accounting.describe();
accounting.printEmployeeInformation();
accounting.printReport();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();