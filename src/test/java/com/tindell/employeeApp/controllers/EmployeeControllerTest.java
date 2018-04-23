package com.tindell.employeeApp.controllers;

import com.tindell.employeeApp.models.Employee;
import com.tindell.employeeApp.repositories.EmployeeRepository;
import com.tindell.employeeApp.util.EmployeeConstants;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class EmployeeControllerTest {

    List<Employee> employeeList = new ArrayList<>();

    @Mock
    private EmployeeRepository employeeRepository;


    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        employeeList.add(new Employee(
                "First", "Last", "M", "first@last.com", (long) 1231231234,
                EmployeeConstants.PositionCategory.DIRECT, new Date(), "123 Main St", "",
                "Rockville", EmployeeConstants.States.MARYLAND, 12345, true));
        employeeList.add(new Employee(
                "First", "Last2", "M", "first@last.com", (long) 1231231234,
                EmployeeConstants.PositionCategory.DIRECT, new Date(), "123 Main St", "",
                "Rockville", EmployeeConstants.States.MARYLAND, 12345, true));

        employeeRepository.saveAll(employeeList);
    }

    @Test
    public void index() {
        when(employeeRepository.findAll()).thenReturn(employeeList);

        Iterable<Employee> result = employeeRepository.findAll();
        assertEquals(2, result.spliterator().getExactSizeIfKnown());
    }

    @Test
    public void save() {
//        employeeRepository.findAll()
    }

    @Test
    public void show() {
    }

    @Test
    public void update() {
    }

    @Test
    public void delete() {
    }

    @Test
    public void search() {

    }
}