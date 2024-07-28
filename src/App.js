import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetails from './components/EmployeeDetail';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <div className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<EmployeeList />} />
                        <Route path="/create" element={<EmployeeForm />} />
                        <Route path="/details/:id" element={<EmployeeDetails />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
// test update git 2
export default App;