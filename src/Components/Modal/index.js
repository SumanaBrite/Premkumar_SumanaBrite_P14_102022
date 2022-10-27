import React from 'react';
import { useState } from 'react';
import './Modal.css';

export function Modal({ text, handleResponse }) {

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
                React.createElement('img', { className: 'logo', src: 'logo.png', alt: 'logo' }),
                React.createElement(
                    'h4',
                    null,
                    ' ',
                    text
                ),
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

