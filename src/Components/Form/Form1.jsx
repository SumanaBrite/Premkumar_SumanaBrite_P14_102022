import './Form.css'
import states from '../../Data/states'
import departments from '../../Data/departments'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { useState } from 'react'
import useGlobalState from '../../State/State'
// import Modal from '../Modal/Modal'
import Modal from '@sumanabrite/r-modal'
import React from 'react'


export default function Form() {
    const { register, handleSubmit, control } = useForm();

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

    const handleFormChange = (e, employee) => {
        e.preventDefault()

        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value

        const newData = { ...addData }
        newData[fieldName] = fieldValue

        setData(newData)
        console.log(newData);
    }

    const [isValid, setIsValid] = useState(false)

    const handleModalResponse = () => {
        setIsValid(false)
    }

    const sortData = (x, y) => {
        let a = x.label
        let b = y.label
        return a < b ? -1 : a === b ? 0 : 1
    }

    const departmentsSorted = departments.sort(sortData)
    const statesSorted = states.sort(sortData)

    const handleFormSubmit = (e, employee) => {
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
                onSubmit={handleSubmit(handleFormSubmit)}
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

                    <label className="formLabel">
                        Date of Birth
                        <Controller
                            name='dateOfBirth'
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    onChange={onChange}
                                    selected={value}
                                    placeholderText={new Date().toLocaleDateString('en-US')}
                                // yearDropdownItemNumber={50}
                                // showYearDropdown
                                // scrollableYearDropdown
                                // showMonthDropdown
                                />
                            )}
                        />

                    </label>

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
                    <label htmlFor='state'>State</label>
                    <Controller
                        name='state'
                        control={control}
                        onChange={handleFormChange}

                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select {...field} options={statesSorted} />
                        )}
                    />
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
                        {departmentsSorted.map((dept, index) => {
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
