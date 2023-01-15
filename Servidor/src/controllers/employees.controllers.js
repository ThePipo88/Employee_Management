const employees = {}

const Employee = require('../models/Employee')

employees.getEmployees = async (req,res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employees.getEmployee = async (req,res) => {
    console.log(req.params);
    const employee = await Employee.findById(req.params.id)
    res.send(employee);
}

employees.createEmployee = async (req,res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save();
    res.send({mesage: "Employee created"});
}
employees.editEmployee = async (req,res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Employee updated'})
}
employees.deleteEmployee = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee Deleted'})
}

module.exports = employees;