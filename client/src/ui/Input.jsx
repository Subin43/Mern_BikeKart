import React, { useState } from 'react'

const Input = ({type,name,placeholder,className}) => {
    const [formData,setFormdata] = useState([])
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormdata({...formData,[name]:value})
    }
  return (
    <>
    <input type={type}
           name={name}
           placeholder={placeholder}
           value={formData[name] || ''}
           onChange={(e) =>handleChange()}
           className=''
           />
    </>
  )
}

export default Input