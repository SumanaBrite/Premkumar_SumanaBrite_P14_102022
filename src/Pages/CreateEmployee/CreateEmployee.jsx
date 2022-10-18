import React from 'react';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom'
import Form from '../../Components/Form/Form'
import './CreateEmployee.css'

export default function CreateEmployee() {
    return (
        <div className='createEmployee'>
            <Header />
            <Link className="tableView" to="/listEmployee">
                View Current Employees
            </Link>
            <Form />
        </div>
    )
}
