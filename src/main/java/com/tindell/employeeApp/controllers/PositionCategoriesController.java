package com.tindell.employeeApp.controllers;

import com.tindell.employeeApp.util.EmployeeConstants;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class PositionCategoriesController {

    @RequestMapping(method = RequestMethod.GET, value = "/api/positionCategories")
    public Iterable<EmployeeConstants.PositionCategory> state() {
        return Arrays.asList(EmployeeConstants.PositionCategory.values());
    }

}
