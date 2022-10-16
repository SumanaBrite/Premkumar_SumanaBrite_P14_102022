import React from 'react';
import { useState } from 'react';
import './Modal.css';

export default function Modal({ text, handleResponse }) {

    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        handleResponse();
    };

    return React.createElement(
        'div',
        null,
        toggle ? React.createElement(
            'div',
            { className: 'modal-container' },
            React.createElement(
                'div',
                { className: 'modal' },
                text,
                React.createElement(
                    'button',
                    {
                        type: 'button',
                        className: 'modalButton',
                        onClick: () => {
                            setToggle(false);
                            handleClick();
                        }
                    },
                    'Close'
                )
            )
        ) : ''
    );
}

