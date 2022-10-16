import './Form.css'
import states from '../../Data/states'
import departments from '../../Data/departments'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react'
import useGlobalState from '../../State/State'
// import Modal from '../Modal/Modal'
import Modal from '@sumanabrite/r-modal'
import React from 'react'


export default function Form() {
    const [employees, setEmployees] = useGlobalState('employee')
    const [selectedDate, setSelectedDate] = useState()


    const [addData, setData] = useState({
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        startDate: '',
        department: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    })

    const handleFormChange = (e) => {
        e.preventDefault()

        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value

        const newData = { ...addData }
        newData[fieldName] = fieldValue

        setData(newData)
    }

    const [isValid, setIsValid] = useState(false)

    const handleModalResponse = () => {
        setIsValid(false)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const newEmployee = {
            firstname: addData.firstname,
            lastname: addData.lastname,
            startDate: addData.startDate,
            department: addData.department,
            dateOfBirth: addData.dateOfBirth,
            street: addData.street,
            city: addData.city,
            state: addData.state,
            zipCode: addData.zipCode,
        }

        const newEmployees = [...employees, newEmployee]
        setEmployees(newEmployees)
        setIsValid(true)

        const form = e.target
        form.reset()
    }

    return (
        <section className="formContent">
            <h2 className="formTitle">Create Employee</h2>
            <form className="form"
                onSubmit={handleFormSubmit}
            >
                <div className="formUpperPart">
                    <label className="formLabel">
                        First Name
                        <input
                            className="formInput"
                            type="text"
                            name="firstname"
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <label className="formLabel">
                        Last Name
                        <input
                            className="formInput"
                            type="text"
                            name="lastname"
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <label className="formLabel"
                        name="dateOfBirth"
                    >
                        Date of Birth
                        <DatePicker
                            className="formInput"
                            selected={selectedDate}
                            type="date"
                            name="dateOfBirth"
                            onChange={date => {
                                setSelectedDate(date)
                                handleFormChange()
                            }}
                            dateFormat="dd/MM/yyyy"
                            placeholderText={new Date().toLocaleDateString('en-US')}
                            showYearDropdown
                            scrollableYearDropdown
                            required
                        /></label>

                    <label className="formLabel">
                        Start Date
                        <input
                            className="formInput"
                            type="date"
                            name="startDate"
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                </div>
                <div className="fieldset">
                    <label className="formLabel">
                        Street
                        <input
                            className="formInput"
                            type="text"
                            name="street"
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <label className="formLabel">
                        City
                        <input
                            className="formInput"
                            type="text"
                            name="city"
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <label className="formLabel">
                        State
                        <select
                            className="formSelect"
                            name="state"
                            onChange={handleFormChange}
                            required
                        >
                            <option value=""></option>
                            {states.map((state, index) => {
                                return (
                                    <option key={index} value={state.abbreviation}>
                                        {state.name}
                                    </option>
                                )
                            })}
                        </select>
                    </label>
                    <label className="formLabel">
                        Zip Code
                        <input
                            className="formInput"
                            type="text"
                            name="zipCode"
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                </div>
                <label className="formLabel">
                    Department
                    <select
                        className="formSelect"
                        name="department"
                        onChange={handleFormChange}
                        required
                    >
                        <option value=""></option>
                        {departments.map((dept, index) => {
                            return (
                                <option key={index} value={dept.label}>
                                    {dept.value}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <button type="submit" className="btn-modal">
                    Save
                </button>
                {isValid ? (
                    <Modal
                        text="Employee Created !"
                        handleResponse={handleModalResponse}
                    />
                ) : (
                    ''
                )}
            </form>
        </section>
    )
}
