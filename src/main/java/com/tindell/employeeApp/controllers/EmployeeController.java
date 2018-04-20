package com.tindell.employeeApp.controllers;

import com.tindell.employeeApp.models.Employee;
import com.tindell.employeeApp.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;


    @RequestMapping(method = RequestMethod.GET, value = "/api/employees")
    public Iterable<Employee> employee() {
        return employeeRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/api/employees")
    public Employee save(@Valid @RequestBody Employee employee) {
        // this is a new record, so set the date created
        employee.setDateCreated(new Date());
        employeeRepository.save(employee);

        return employee;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/api/employees/{id}")
    public Optional<Employee> show(@PathVariable String id) {
        return employeeRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/api/employees/{id}")
    public Employee update(@PathVariable String id, @Valid @RequestBody Employee employee) {
        Optional<Employee> tempEmp = employeeRepository.findById(id);
        if (tempEmp.isPresent()) { // TODO: test this
            Employee emp = tempEmp.get();
            // TODO: this could be replaced by a method in the model that allows for optional inputs
            if (employee.getFirstName() != null) {
                emp.setFirstName(employee.getFirstName());
            }
            if (employee.getLastName() != null) {
                emp.setLastName(employee.getLastName());
            }
            if (employee.getMiddleInitial() != null) {
                emp.setMiddleInitial(employee.getMiddleInitial());
            }
            if (employee.getEmailAddress() != null) {
                // TODO: verify in the model
                emp.setEmailAddress(employee.getEmailAddress());
            }
            if (employee.getPhoneNumber() != null) {
                emp.setPhoneNumber(employee.getPhoneNumber());
            }
            if (employee.getPositionCategory() != null) {
                emp.setPositionCategory(employee.getPositionCategory());
            }
            if (employee.getDateHired() != null) {
                emp.setDateHired(employee.getDateHired());
            }
            if (employee.getAddress1() != null) {
                emp.setAddress1(employee.getAddress1());
            }
            if (employee.getAddress2() != null) {
                emp.setAddress2(employee.getAddress2());
            }
            if (employee.getCity() != null) {
                emp.setCity(employee.getCity());
            }
            if (employee.getState() != null) {
                emp.setState(employee.getState());
            }
            if (employee.getZip() != null) {
                emp.setZip(employee.getZip());
            }
            if (employee.getActive() != null) {
                emp.setActive(employee.getActive());
            }

            // don't care if the user passes one in, I'm updating it if the DB object doesn't have it.
            // this shouldn't be the case, but since I didn't have it implemented right away, some of my records didn't have it.
            if (emp.getDateCreated() == null) {
                emp.setDateCreated(new Date()); // TODO: this doesn't work at the moment
            }
            employeeRepository.save(emp);
        } // WHAT IF ELSE?
        employee.setId(id);
        return employee;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/api/employees/{id}")
    public String delete(@PathVariable String id) {
        employeeRepository.deleteById(id);
        return "";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/api/employees/search")
    public List<Employee> search(@RequestParam String lastName) {
        return employeeRepository.findByLastNameContainingIgnoreCase(lastName);
    }

}