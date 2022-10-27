import React from 'react'
import { useState } from 'react'
import './Modal.css'

export function Modal({ text, handleResponse }) {

    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        handleResponse()
    }

    return (
        <div>
            {toggle ? (
                <div className="modal-container">

                    <div className="modal">
                        <img className='logo' src="logo.png" alt="logo" />

                        <h4> {text}</h4>
                        <button
                            type="button"
                            className="modalButton"
                            onClick={() => {
                                setToggle(false)
                                handleClick()
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}
