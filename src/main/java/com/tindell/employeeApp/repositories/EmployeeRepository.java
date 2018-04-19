package com.tindell.employeeApp.repositories;

import com.tindell.employeeApp.models.Employee;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface EmployeeRepository extends CrudRepository<Employee, String> {

//    @Override
//    Optional<Employee> findById(String id);

//    @Override
//    void delete(Employee deleted);

}
