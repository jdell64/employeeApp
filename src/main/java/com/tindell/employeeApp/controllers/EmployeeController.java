package com.tindell.employeeApp.controllers;

import com.tindell.employeeApp.models.Employee;
import com.tindell.employeeApp.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    // TODO: remove this
    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot with Docker!";
    }


    @RequestMapping(method = RequestMethod.GET, value = "/employees")
    public Iterable<Employee> employee() {
        return employeeRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/employees")
    public Employee save(@RequestBody Employee employee) {
        employeeRepository.save(employee);

        return employee;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/employees/{id}")
    public Optional<Employee> show(@PathVariable String id) {
        return employeeRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/employees/{id}")
    public Employee update(@PathVariable String id, @RequestBody Employee employee) {
        Optional<Employee> tempEmp = employeeRepository.findById(id);
        if (tempEmp.isPresent()) {
            Employee emp = tempEmp.get();
            if (employee.getFirstName() != null) {
                emp.setFirstName(employee.getFirstName());
            }

            employeeRepository.save(emp);
        }
        return employee;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/employees/{id}")
    public String delete(@PathVariable String id) {
        employeeRepository.deleteById(id);

        return "";
    }

}