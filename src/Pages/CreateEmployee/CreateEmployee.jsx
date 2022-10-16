import React from 'react';

import { Link } from 'react-router-dom'
import Form from '../../Components/Form/Form'
import './CreateEmployee.css'

export default function CreateEmployee() {
    return (
        <div className='createEmployee'>
            <h1 className="title">HRnet</h1>
            <Link className="formTitle" to="/listEmployee">
                View Current Employee
            </Link>
            <Form />
        </div>
    )
}
