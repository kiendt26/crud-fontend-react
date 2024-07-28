import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">Employee List</Link>
                </li>
                <li>
                    <Link to="/create">Create Employee</Link>
                </li>
                <li>
                    <Link to="/details/:id">Employee Details</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;