import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Container, Row, Col, Spinner, Collapse, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import Button from '../../ui/Button';

const defaultImage = 'https://i.pinimg.com/736x/a9/54/4b/a9544bd4ee0ef04ba41688096c806f60.jpg';

const BuyBikes = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortedBikes, setSortedBikes] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showPriceOptions, setShowPriceOptions] = useState(false);
  const [showBrandOptions, setShowBrandOptions] = useState(false);
  const [showKMOptions, setShowKMOptions] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedKMRange, setSelectedKMRange] = useState(null);

  useEffect(() => {
    const fetchBikes = async () => {
      setLoading(true);
      try {
        const res = await axios.get('http://localhost:5000/buy/bike');
        setBikes(res.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log('error:', error.message);
      }
    };

    fetchBikes();
  }, []);

  const handleFiltersToggle = () => {
    setShowFilters(!showFilters);
  };

  const handlePriceToggle = () => {
    setShowPriceOptions(!showPriceOptions);
  };

  const handleBrandToggle = () => {
    setShowBrandOptions(!showBrandOptions);
  };

  const handleKMToggle = () => {
    setShowKMOptions(!showKMOptions);
  };

  const handlePriceRangeChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedPriceRange(selectedRange);
    
    const filteredBikes = bikes.filter(bike => {
      const price = bike.price;
      if (selectedRange === '30000-40000') return price >= 30000 && price <= 40000;
      if (selectedRange === '40000-60000') return price >= 40000 && price <= 60000;
      if (selectedRange === '60000-90000') return price >= 60000 && price <= 90000;
      return true;
    });
    setSortedBikes(filteredBikes);
  };

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setSelectedBrand(selectedBrand);

    const filteredBikes = bikes.filter(bike => bike.brand === selectedBrand);
    setSortedBikes(filteredBikes);
  };

  const handleKMRangeChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedKMRange(selectedRange);

    const filteredBikes = bikes.filter(bike => {
      const kmDriven = bike.kmDriven;
      if (selectedRange === 'lessThan5000') return kmDriven < 5000;
      if (selectedRange === '5000-10000') return kmDriven >= 5000 && kmDriven <= 10000;
      if (selectedRange === '10000-30000') return kmDriven >= 10000 && kmDriven <= 30000;
      if (selectedRange === '30000-60000') return kmDriven >= 30000 && kmDriven <= 60000;
      if (selectedRange === 'moreThan60000') return kmDriven > 60000;
      return true;
    });
    setSortedBikes(filteredBikes);
  };

  const handleLowPrice = () => {
    const sorted = [...bikes].sort((a, b) => a.price - b.price);
    setSortedBikes(sorted);
  };

  const handleHighPrice = () => {
    const sorted = [...bikes].sort((a, b) => b.price - a.price);
    setSortedBikes(sorted);
  };

  const handleLatest = () => {
    const sorted = [...bikes].sort((a, b) => new Date(b.yearOfBuy) - new Date(a.yearOfBuy));
    setSortedBikes(sorted);
  };

  const handleKMLow = () => {
    const sortedKm = [...bikes].sort((a, b) => a.kmDriven - b.kmDriven);
    setSortedBikes(sortedKm);
  };

  return (
    <div>
      <Row className="mb-4">
        <Col>
          <Link to="/" className="text-decoration-none">
            <p className="text-primary m-4 mb-5">HOME</p>
          </Link>
        </Col>
        <Col>
          <DropdownButton id="dropdown-basic-button" title="Sort By:">
            <Dropdown.Item onClick={handleLowPrice}>Price: Low to High</Dropdown.Item>
            <Dropdown.Item onClick={handleHighPrice}>Price: High to Low</Dropdown.Item>
            <Dropdown.Item onClick={handleLatest}>Latest</Dropdown.Item>
            <Dropdown.Item onClick={handleKMLow}>Km: Low to High</Dropdown.Item>
          </DropdownButton>
        </Col>

        <Col>
          <Button
            name="Filters"
            style={{ width: '20%' }}
            onClick={handleFiltersToggle}
          />
        </Col>
      </Row>

      <Collapse in={showFilters}>
        <div className="mb-4 m-4">
          <Button
            name="Price"
            style={{ width: '15%' }}
            onClick={handlePriceToggle}
          />
          <Collapse in={showPriceOptions}>
            <div className="mt-3">
              <Form>
                <Form.Group as={Row}>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="30000 - 40000"
                      name="priceRange"
                      value="30000-40000"
                      onChange={handlePriceRangeChange}
                    />
                    <Form.Check
                      type="radio"
                      label="40000 - 60000"
                      name="priceRange"
                      value="40000-60000"
                      onChange={handlePriceRangeChange}
                    />
                    <Form.Check
                      type="radio"
                      label="60000 - 90000"
                      name="priceRange"
                      value="60000-90000"
                      onChange={handlePriceRangeChange}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Collapse>

          <Button
            name="Brand"
            style={{ width: '15%' }}
            onClick={handleBrandToggle}
            className="ml-3"
          />
          <Collapse in={showBrandOptions}>
            <div className="mt-3">
              <Form>
                <Form.Group as={Row}>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="TVS"
                      name="brand"
                      value="TVS"
                      onChange={handleBrandChange}
                    />
                    <Form.Check
                      type="radio"
                      label="KTM"
                      name="brand"
                      value="KTM"
                      onChange={handleBrandChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Bajaj"
                      name="brand"
                      value="Bajaj"
                      onChange={handleBrandChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Royal Enfield"
                      name="brand"
                      value="Royal Enfield"
                      onChange={handleBrandChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Hero"
                      name="brand"
                      value="Hero"
                      onChange={handleBrandChange}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Collapse>

          <Button
            name="KM Driven"
            style={{ width: '15%' }}
            onClick={handleKMToggle}
            className="ml-3"
          />
          <Collapse in={showKMOptions}>
            <div className="mt-3">
              <Form>
                <Form.Group as={Row}>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="Less than 5000"
                      name="kmRange"
                      value="lessThan5000"
                      onChange={handleKMRangeChange}
                    />
                    <Form.Check
                      type="radio"
                      label="5000 - 10000"
                      name="kmRange"
                      value="5000-10000"
                      onChange={handleKMRangeChange}
                    />
                    <Form.Check
                      type="radio"
                      label="10000 - 30000"
                      name="kmRange"
                      value="10000-30000"
                      onChange={handleKMRangeChange}
                    />
                    <Form.Check
                      type="radio"
                      label="30000 - 60000"
                      name="kmRange"
                      value="30000-60000"
                      onChange={handleKMRangeChange}
                    />
                    <Form.Check
                      type="radio"
                      label="More than 60000"
                      name="kmRange"
                      value="moreThan60000"
                      onChange={handleKMRangeChange}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </Collapse>
        </div>
      </Collapse>

      <Container className="my-4">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row>
            {(sortedBikes.length > 0 ? sortedBikes : bikes).map((bike, index) => (
              <Col key={index} sm={12} md={6} lg={3} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={bike.image || defaultImage} alt={bike.name} />
                  <Card.Body>
                    <Row>
                      <Col xs={9}>
                        <Card.Title>{bike.name}</Card.Title>
                      </Col>
                      <Col xs={3} className="d-flex justify-content-end align-items-center">
                        {/* Replace Icons with your icon component */}
                        {/* <Icons iconId={2} size={20} color="grey" /> */}
                      </Col>
                    </Row>
                    <Card.Text>
                      Brand: {bike.brand} <br />
                      Price: ₹{bike.price} <br />
                      KM Driven: {bike.kmDriven} km <br />
                      Registration Year: {bike.year}
                    </Card.Text>
                    {/* <Button
                      name="View More"
                      style={{ width: '100%' }}
                      onClick={() => window.location.href = `/buy/bike/${bike._id}`}
                    /> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default BuyBikes;
