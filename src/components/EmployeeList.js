import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error('Error fetching employees:', error);
            });
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.department}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;