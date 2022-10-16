import React from 'react'
import { useState } from 'react'
import './Modal.css'

export default function Modal({ text, handleResponse }) {

    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        handleResponse()
    }

    return (
        <div>
            {toggle ? (
                <div className="modal-container">
                    <div className="modal">
                        {text}
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
