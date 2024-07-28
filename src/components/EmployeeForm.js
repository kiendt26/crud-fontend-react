import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';

const EmployeeForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const employee = { name, email, department };
        EmployeeService.createEmployee(employee)
            .then((response) => {
                console.log('Employee created:', response.data);
                setName('');
                setEmail('');
                setDepartment('');
            })
            .catch((error) => {
                console.error('Error creating employee:', error);
            });
    };

    return (
        <div>
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <input
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default EmployeeForm;