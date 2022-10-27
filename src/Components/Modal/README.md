# @sumanabrite/reactmodal

Responsive modal dialog component for React.

## Installation

To install, you can use [npm](https://npmjs.org/) 
    
- npm install @sumanabrite/r-modal
  
## Example

```jsx

import { Modal } from '@sumanabrite/r-modal'
import React from 'react'

export default function Form() {
  window.React = React

  const [isValid, setIsValid] = useState(false)
  
  const handleModalResponse = () => {
    setIsValid(false)
  }

  const handleAddFormSubmit = (e) => {
    e.preventDefault()
    setIsValid(true)
  }

  return (
    <section className="formContent">
      <h2 className="formTitle">Create Employee</h2>
      <form className="form" onSubmit={handleAddFormSubmit}>
        (...)
      </form>
      {isValid ? <Modal text="Employee Created !" handleResponse={handleModalResponse} /> : ''}
    </section>
  )
}

```