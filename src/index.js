import { Request } from "./request";
import { UI } from "./ui"; 
//element seçimleri
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeeList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();
//request.get().then(employees=>console.log(employees)).catch(err=>console.log(err));
//request.post({name:"osman tonbul3",department:"bilişim",salary:15000}).then(response=>console.log(response)).catch(err=>console.log(err));
//request.put(1,{name:"osman tonbul4",department:"bilişim",salary:15000}).then(response=>console.log(response)).catch(err=>console.log(err));
//request.delete(39).then(response=>console.log(response)).catch(err=>console.log(err));

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded",getAllEmployees);
    form.addEventListener("submit",addEmployee);
}
function getAllEmployees(){
    request.get().then(employees=>{  
        ui.addAllEmployeesToUI(employees);
    }).catch(err=>console.log(err));
}

