import React from 'react'
import { Form } from 'react-bootstrap'

const CheckBox = () => {
  return (
        <Form>
           {['checkbox',radio].map((type)=>(
            <div key={`default-${type}`} className='mb-3'>
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Brand ${type}`}
                  />
                <Form.Check
                  disabled
                  type={type}
                  label={`Price ${type}`}
                  id={`disabled- default-${type}`}
                  />
            </div>
           ))}
        </Form>
  )
}

export default CheckBox