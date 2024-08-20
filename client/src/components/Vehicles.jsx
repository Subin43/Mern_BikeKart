import React from 'react';
import ImageComponent from '../ui/images';

const vehicles = [
  { id: 8, label: 'Scooter' },
  { id: 9, label: 'Commuter' },
  { id: 10, label: 'Sports' },
  { id: 11, label: 'Tourer' }
];

const Vehicles = () => {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center p-5'>
        <h3>Browse by style</h3>
      </div>
      <div className='container'>
        <div className='row'>
          {vehicles.map((vehicle, index) => (
            <div key={index} className='col-md-3 mb-4'>
              <div className='card h-100 text-center'>
                <div className='card-body'>
                  <ImageComponent imageId={vehicle.id} style={{ width: '70%', height: 'auto', margin: '0 auto' }} />
                  <p className='card-text'>{vehicle.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Vehicles;
