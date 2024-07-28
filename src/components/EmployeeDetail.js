import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const EmployeeDetails = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then((response) => {
                setEmployee(response.data);
            })
            .catch((error) => {
                console.error('Error fetching employee:', error);
            });
    }, [id]);

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Employee Details</h2>
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
        </div>
    );
};

export default EmployeeDetails;