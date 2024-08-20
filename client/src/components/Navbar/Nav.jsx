import React,{useState} from 'react';
import ImageComponent from '../../ui/images';
import CustomDropdown from '../CustomDropdown';
import Icons from '../../ui/Icons';
import { Link } from 'react-router-dom';
import Input from '../../ui/Input';
import { Dropdown } from 'react-bootstrap';

const Nav = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [loggedIn,setLoggedIn] = useState(false);

  // Function to handle the selection of a city
  const handleSelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center" style={{ marginLeft: '-90px' }}>
          <ImageComponent imageId={1} style={{width:'50px',height:'auto'}} />
          <h2 className="text-muted ms-1">BikeCart</h2>
        </div>
        
        <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {!selectedCity ? (
            "Select City"
          ):selectedCity}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSelect('Bangalore')}>Bangalore</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect('Mumbai')}>Mumbai</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect('Chennai')}>Chennai</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Display the selected city in the main content */}
      {selectedCity && (
        <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
        </div>
      )}
    </div>
        
        <div className="d-flex align-items-center">
          <Link to="/buy" className="nav-link d-flex align-items-center">
            <Icons iconId={1} size="40" color="blue"/>
            <h6 className="mb-0 ms-1">Buy Bikes</h6>
          </Link>
          <Link to="/sell" className="nav-link d-flex align-items-center">
            <Icons iconId={3} size={30} color="blue"/>
            <h6 className="mb-0 ms-1">Sell Bikes</h6>
          </Link>
        </div>
        
        <div className="d-flex align-items-center">
          <Input 
            type="search" 
            name="search" 
            placeholder="Brand or Model" 
            className="form-control"
          />
        </div>
        
        <div className="d-flex align-items-center">
          <Link to='favourites' className="nav-link d-flex align-items-center">
            <Icons iconId={2} size={20} color='red' />
            <p className="mb-0 ms-1">Wishlist</p>
          </Link>
          {/* <Link to='account' className="nav-link d-flex align-items-center">
            <Icons iconId={4} size={20} color='red' />
            <p className="mb-0 ms-1">Account</p>
          </Link> */}
          <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Account
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSelect('Bangalore')}>{loggedIn ? (""):("SignUp or Login")}</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect('Mumbai')}>Refer & Earn</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect('Chennai')}>Support</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect('Chennai')}>Signout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          <Link to='contact' className="nav-link d-flex align-items-center">
            <Icons iconId={5} size={25} color='red' />
            <p className="mb-0 ms-1">Call</p>
          </Link>
          <Link to='/whatsapp' className="nav-link d-flex align-items-center">
            <Icons iconId={6} size={30} color='green' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
