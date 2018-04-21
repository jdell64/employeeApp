package com.tindell.employeeApp.models;

import com.tindell.employeeApp.util.EmployeeConstants;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;

import java.util.Date;

@Document(collection = "employees")
public class Employee {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String middleInitial;

    @Email(message = "Email should be valid")
    private String emailAddress;
    private Long phoneNumber;
    private EmployeeConstants.PositionCategory positionCategory;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date lastModified;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date dateCreated;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date dateHired;

    private String address1;
    private String address2;
    private String city;
    private EmployeeConstants.States state;

    @Max(99999)
    private Integer zip;
    private Boolean isActive;


    public Employee() {
        this.lastModified = new Date();
    }

    public Employee(String firstName, String lastName, String middleInitial, String emailAddress, Long phoneNumber,
                    EmployeeConstants.PositionCategory positionCategory, Date dateHired,
                    String address1, String address2, String city, EmployeeConstants.States state, Integer zip,
                    Boolean isActive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.positionCategory = positionCategory;
        this.lastModified = new Date();
        this.dateHired = dateHired;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.isActive = isActive;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMiddleInitial() {
        return middleInitial;
    }

    public void setMiddleInitial(String middleInitial) {
        this.middleInitial = middleInitial;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public EmployeeConstants.PositionCategory getPositionCategory() {
        return positionCategory;
    }

    public void setPositionCategory(EmployeeConstants.PositionCategory positionCategory) {
        this.positionCategory = positionCategory;
    }

    public Date getLastModified() {
        return lastModified;
    }

    public void setLastModified(Date lastModified) {
        this.lastModified = lastModified;
    }

    public Date getDateHired() {
        return dateHired;
    }

    public void setDateHired(Date dateHired) {
        this.dateHired = dateHired;
    }

    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public EmployeeConstants.States getState() {
        return state;
    }

    public void setState(EmployeeConstants.States state) {
        this.state = state;
    }

    public Integer getZip() {
        return zip;
    }

    public void setZip(Integer zip) {
        this.zip = zip;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }
}
