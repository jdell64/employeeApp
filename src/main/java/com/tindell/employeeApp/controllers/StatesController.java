package com.tindell.employeeApp.controllers;

import com.tindell.employeeApp.util.EmployeeConstants;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class StatesController {

    @RequestMapping(method = RequestMethod.GET, value = "/api/states")
    public Iterable<EmployeeConstants.States> state() {
        return Arrays.asList(EmployeeConstants.States.values());
    }

}
