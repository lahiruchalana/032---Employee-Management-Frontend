import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import * as Icon from 'react-bootstrap-icons';


function Home() {
    const [employeeList, setEmployeeList] = useState([]);
    const [isResponseErrorOnGetEmployees, setIsResponseErrorOnGetEmployees] = useState(false);

    const employeeUrl = "http://localhost:8080/employee-management-system/api/data/employees/all";


    useEffect(() => {   // get employee data 
        axios.get(employeeUrl).then((response) => {
            setEmployeeList(response.data);
            setIsResponseErrorOnGetEmployees(false);
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log("Reason For Error : " + error.response.data.message);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
        })

    }, [employeeUrl])

    return(
        <div className="Container">
            <br></br>
            <h1>Employee Management System</h1>
            <br></br>
            
            {/* table starts */}

            <Table striped bordered hover variant="dark" id="margin_top_10">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>DepartmentId</th>
                    <th>DepartmentName</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {isResponseErrorOnGetEmployees === true  ? <tr>
                        <td>No Data</td>
                        <td>No Data</td>
                        <td>No Data</td>
                        <td>No Data</td>
                        <td>No Data</td>
                        </tr> :  employeeList.map(element => {
                        return <tr>
                                    <td>{element.employeeId}</td>
                                    <td>{element.firstName}</td>
                                    <td>{element.lastName}</td>
                                    <td>{element.department.departmentId}</td>
                                    <td>{element.department.name}</td>
                                    <td onClick={() => { 
                                        // setDeleteCurrencyRateId(element.currencyRateId);
                                        // deleteTableData(element.currencyRateId);  
                                        }}><Button variant="outline-secondary"><Icon.Trash color='white' size={16}/></Button></td>
                                    <td onClick={() => {
                                        // setUpdateCurrencyRateId(element.currencyRateId);
                                        // updateFormData(element);
                                    }}><Button variant="outline-secondary"><Icon.ArrowRepeat color='white' size={16}/></Button></td>
                                </tr>
                    })}
                </tbody>
            </Table>

            {/* table ends */}
    
        </div>
    )
}

export default Home;