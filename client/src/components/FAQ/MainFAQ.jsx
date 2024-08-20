import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../../ui/Icons';
import Button from '../../ui/Button';
import BuyerFAQ from './BuyerFAQ';
import SellerFAQ from './SellerFAQ';

const MainFAQ = () => {
  const [isBuyer, setIsBuyer] = useState(true);

  const handleSeller = () => {
    setIsBuyer(false);
  };

  const handleBuyer = () => {
    setIsBuyer(true);
  };

  return (
    <div style={{ backgroundColor: "#dee0e5" }}>
      <div className='d-flex flex-column p-4 ml-3'>
        <div className='d-flex align-items-center mb-2'>
          <Link to="/" className='text-decoration-none mr-2'>
            <p>Home</p>
          </Link>
          <Icons iconId={9} size={14} />
          <p className='ml-1'>FAQ</p>
        </div>
        <div className='d-flex mb-2'>
          <Button 
            name="Buyer" 
            onClick={handleBuyer} 
            style={{ 
              backgroundColor: isBuyer ? "white" : "#dee0e5", 
              width: "15%", 
              color: "black" 
            }} 
            className={"p-2 ml-2"} 
          >
            Buyer
          </Button>
          <Button 
            name="Seller" 
            onClick={handleSeller} 
            style={{ 
              backgroundColor: !isBuyer ? "white" : "#dee0e5", 
              width: "15%", 
              color:"black" 
            }} 
            className={"p-2 ml-2"} 
          >
            Seller
          </Button>
        </div>
        {
          isBuyer ? <BuyerFAQ /> : <SellerFAQ />
        }
      </div>
    </div>
  );
}

export default MainFAQ;
