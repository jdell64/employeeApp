package com.tindell.employeeApp.repositories;

import com.tindell.employeeApp.models.Employee;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmployeeRepository extends CrudRepository<Employee, String> {

    List<Employee> findByLastNameContainingIgnoreCase(String lastName);

}
