class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

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
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
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

accounting.describe();
accounting.printEmployeeInformation();
accounting.printReport();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();