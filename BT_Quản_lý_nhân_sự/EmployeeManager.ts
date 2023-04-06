import {Employee} from "./Employee";

 interface Manager {
    add(employee: Employee)
    display()
    edit(ID: string, employee: Employee)
    delete(ID: string)
}

 export class EmployeeManager implements Manager {
    static employeeList: Employee[] = [];
    constructor() {
    }

    static getList() {
        return EmployeeManager.employeeList;
    }
    add(employee: Employee) {
        EmployeeManager.employeeList.push(employee);
    }

    // findIndex(ID: string) {
    //    return  EmployeeManager.employeeList.find((employee)=>employee.getID()===ID);
    // }
    delete(ID: string) {
        EmployeeManager.employeeList = EmployeeManager.employeeList.filter((employee) => employee.getID() !== ID);
    }
    display() {
        return EmployeeManager.employeeList;
    }
    edit(ID: string, employee: Employee) {
        // let i = -1;
        // EmployeeManager.employeeList.forEach((ele, index) => {
        //     if (ele.getID() === ID) {
        //         i = index;
        //     }
        // })
        // if (i === -1) {
        //     console.log('không tìm thấy ID để sửa');
        // } else {
        //     EmployeeManager.employeeList[i] = employee;
        // }

        let result = EmployeeManager.employeeList.findIndex((employee) => employee.getID() === ID)
        EmployeeManager.employeeList.splice(result, 1, employee);
    }
}