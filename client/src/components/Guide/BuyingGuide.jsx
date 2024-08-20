import React from 'react';
import ImageComponent from '../../ui/images';
import { Link } from 'react-router-dom';
import Icons from '../../ui/Icons';

const BuyingGuide = () => {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center p-5'>
        <h2>Buy a bike in 3 steps</h2>
      </div>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-md-4 mb-4'>
            <ImageComponent imageId={5} style={{width:"65%", height:"auto"}} />
            <h4>Find your perfect ride</h4>
            <p>Explore our diverse collection and select<br />
              the bike that best matches your needs
            </p>
            <Link to="hi" className="text-decoration-none">
              <p>Explore Bikes</p>
            </Link>
          </div>
          <div className='col-md-4 mb-4'>
            <ImageComponent imageId={6} style={{width:"65%", height:"auto"}} />
            <h4>Get a test ride</h4>
            <p>Reserve the bike & test drive at Home or at<br />
              our Hub. Reservation amount is 100%<br/>
              refundable
            </p>
            <Link to="hub" className="text-decoration-none">
              <p>View Bikecart Hub</p>
            </Link>
          </div>
          <div className='col-md-4 mb-4'>
            <ImageComponent imageId={7} style={{width:"65%", height:"auto"}} />
            <h4>Confirm your choice</h4>
            <p>Complete the purchase and enjoy<br />
              your new bike
            </p>
            <Link to="buy" className="text-decoration-none">
              <p>Buy Bikes</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyingGuide;
