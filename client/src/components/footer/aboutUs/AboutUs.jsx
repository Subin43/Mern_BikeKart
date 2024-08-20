import React from 'react';
import ImageComponent from '../../../ui/images';
import Button from '../../../ui/Button';

const AboutUs = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:career@BikeKart.com';
  };

  return (
    <div className='container my-5'>
      <div className='row'>
        {/* Section 1 */}
        <div className='col-12 d-flex flex-wrap mb-5'>
          <div className='col-12 col-md-6 mb-3 mb-md-0'>
            <ImageComponent 
              imageId={20} 
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: "20px" }}
            />
          </div>
          <div className='col-12 col-md-6'>
            <h2>India moves on 2-wheelers</h2>
            <p>
              24 crore two-wheelers on the roads compared with 3.5 crore<br/>
              cars. In a population of 140 crores, millions don’t have access<br/> 
              to the benefits of personal mobility. BeepKart is building a<br />
              buyer-focused brand of used 2-wheelers. We are taking a<br />
              digital-first approach to provide the trust, convenience, and<br/>
              value-for-money that buyers seek in this high consideration &<br />
              involvement category.<br />
              Ultimately, we are challenging the need to buy a new 2-<br/>wheeler when a BeepKart bike is available!
            </p>
          </div>
        </div>
        
        {/* Section 2 */}
        <div className='col-12 d-flex flex-wrap mb-5'>
          <div className='col-12 col-md-6'>
            <h2>Our Mission</h2>
            <p>
              BikeKart is on a mission to bring affordable personal mobility to<br/>
              millions. Given adequate trust, convenience, and value-for-money -<br/>
              practically everyone would choose a used 2-wheeler over a new one.<br/>
              At BeepKart, we are using technology to solve this. We hope that <br/>
              customer love will make BeepKart bikes a household name one day!
            </p>
          </div>
          <div className='col-12 col-md-6 mb-3 mb-md-0'>
            <ImageComponent 
              imageId={21} 
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: "20px" }}
            />
          </div>
        </div>
        
        {/* Section 3 */}
        <div className='col-12 d-flex flex-wrap'>
          <div className='col-12 col-md-6 mb-3 mb-md-0'>
            <ImageComponent 
              imageId={22} 
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: "20px" }}
            />
          </div>
          <div className='col-12 col-md-6'>
            <h2>Come and Join Us</h2>
            <p>
              BeepKart values an entrepreneurial attitude.We are building a high-<br/>
              performance team with diverse backgrounds and perspectives.<br/>
              Collectively, we hope to represent courage, customer obsession,<br/>
              growth orientation and speed with attention to detail. Your years with<br/> 
              BeepKart can be truly transformative. Early growth stage start-ups offer<br/> 
              a steeper learning curve and higher long-term wealth creation potential.<br/>
              We are hiring across functions.
            </p>
            <h6>If you are keen to have an intense personal growth journey, please apply to</h6>
            <Button name={"career@BikeKart.com"} className={"p-3"} onClick={handleEmailClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
