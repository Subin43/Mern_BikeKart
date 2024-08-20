import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const FAQ = ({Header, Body}) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='p-2' style={{fontSize: "1.25rem", fontWeight: "600"}}>{Header}</Accordion.Header>
        <Accordion.Body>{Body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default FAQ
