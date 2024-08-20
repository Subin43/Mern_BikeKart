import React, {  useState } from 'react'
import CardComponent from '../../ui/Card'

const Hub = () => {
  const [adyarBikes,setAdyarBikes] = useState([]);
 
  return (
    <div>
        <CardComponent src='https://i.pinimg.com/736x/a9/54/4b/a9544bd4ee0ef04ba41688096c806f60.jpg'
                       Title="Adyar-Chennai" 
                       text1="10:30 AM - 7:30 PM (Mon - Sun)" 
                       text2 = "hello"
                       button="View Bikes" 
                       />
    </div>
  )
}

export default Hub