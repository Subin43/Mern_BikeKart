import React from 'react';
import ImageComponent from '../../ui/images';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

const Sell = () => {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden', backgroundColor: "#ebebeb" }}>
      <ImageComponent
        imageId={19}
        style={{ width: '50%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '60%',
        transform: 'translate(-20%, -50%)',
        color: 'black',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2>WANT TO SELL YOUR BIKE ?</h2>
        <p >Let us know about your bike</p>
          <p>Payment in 5 minutes</p>
          <p>Doorstep inspection</p>
          <p>Hustle free RC transfer</p>
        <Button
          name="Sell Bike"
          onClick={() => navigate('/sell')}
          style={{ width: "30%" }}
          className={"p-3"}
        />
      </div>
    </div>
  );
}

export default Sell;
