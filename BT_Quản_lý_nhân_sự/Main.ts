import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let employee_1 = new Employee('0','Truong', 'Hieu', new Date('10-01-1996'), 'Ba Vì', 'king');
let employee_2 = new Employee('1','Duc', 'Anh', new Date('01-01-1996'), 'hu hu', 'king_1');
let employee_3 = new Employee('2','Toan', 'Viet', new Date('02-01-1996'), 'Quảng Ninh', 'king_2');
let employee_4 = new Employee('3','Hieu', 'Tu', new Date('05-01-1996'), 'Ho_tay', 'king_3');

let employee_5 = new Employee('2','A', 'Tu', new Date('05-01-1996'), 'Ho_tay', 'king_3');

let employeeList = new EmployeeManager();
employeeList.add(employee_1);
employeeList.add(employee_2);
employeeList.add(employee_3);
employeeList.add(employee_4);
console.table(employeeList.display());
employeeList.delete('0');
console.table(employeeList.display());
employeeList.edit('2',employee_5);
console.table(employeeList.display());

