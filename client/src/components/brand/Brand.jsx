import React, { useState } from 'react';
import ImageComponent from '../../ui/images';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

const Brands = [
  { id: 12, label: 'Tvs', amount: '43000' },
  { id: 13, label: 'Yamaha', amount: '65000' },
  { id: 14, label: 'Bajaj', amount: '45000' },
  { id: 15, label: 'Hero', amount: '30000' },
  { id: 16, label: 'Royal Enfield', amount: '75000' },
  { id: 17, label: 'Susuki', amount: '55000' },
  { id: 18, label: 'KTM', amount: '125000' },
];

const Brand = () => {
  const [clicked,setIsClicked] = useState(false)
  const navigate = useNavigate();

  const handleBrand = () => {
    navigate("/");
    setIsClicked(true)
  };

  const handleBudget = () => {
    navigate("/");
    setIsClicked(false)
  };

  return (
    <div className='p-1' style={{backgroundColor: "#d3dffb"}}>
      <div className='d-flex justify-content-center mb-4'>
        <Button name="Brand" onClick={handleBrand} className='mx-2 py-3'
                style={{width:"15%",
                        backgroundColor: clicked ? "blue" : "white",
                        color:clicked ? "white" : "blue"
                }}
      />
        <Button name="Budget" onClick={handleBudget} className='mx-2 ' 
                style={{width:"15%",
                  backgroundColor: !clicked ? "blue" : "white",
                  color:!clicked ? "white" : "blue" }}
     />
      </div>
      <div className='container'>
        <div className='row'>
          {Brands.map((items) => (
            <div key={items.id} className='col-md-3 col-sm-6 mb-3 d-flex'>
              <div className='card' style={{ width: '80%', padding: '0.5rem' }}>
                <div className='card-body text-center' style={{ padding: '0.5rem' }}>
                  <ImageComponent imageId={items.id} style={{ width: '50%', height: 'auto', margin: '0 auto' }} />
                  <p className='card-text mt-2'>Starts from</p>
                  <p className='card-text'>{items.amount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
