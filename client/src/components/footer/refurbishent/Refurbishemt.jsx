import React from 'react';
import ImageComponent from '../../../ui/images';

const Refurbishemt = () => {
  return (
    <div className='container my-5'>
      <div className='row'>
        {/* Section 1 */}
        <div className='col-12 d-flex flex-wrap mb-5'>
          <div className='col-12 col-md-6 mb-3 mb-md-0'>
            <ImageComponent 
              imageId={23} 
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: "20px" }}
            />
          </div>
          <div className='col-12 col-md-6'>
            <h2>What is Refurbishment?</h2>
            <p>
            Refurbishment is the process of upgrading the bike's reliability. Our expert<br/> 
            technicians with over 8 years of experience, carefully check and fix any<br/>
            problems, replace worn-out parts, and clean up. It's not just a simple fix;<br/> 
            it's an upgrade to make sure you get a bike that feels almost new.
            </p>
          </div>
          <div className="p-4 mt-5 w-100" style={{backgroundColor:"#ebebeb"}}>
            <h2>Why is it Important?</h2>
            <ul>
              <li>Addressing wear and tear extends the bike's lifespan, giving you better mileage</li>
              <li>Refurbishment ensures all components are in top shape, reducing the risk of accidents</li>
              <li>It helps reduce the chances of unexpected maintenance/repair costs</li>
              <li>We use top-quality parts from OEMs and leading brands for lasting reliability</li>
              <li>Enjoy similar performance and reliability as new bikes at a fraction of the cost</li>
            </ul>
          </div>
        </div>
        
        {/* Section 2 */}
        <div className='col-12 d-flex flex-wrap mb-5' >
          <div className="w-100 d-flex justify-content-between">
            <div className="text-center" style={{ width: '33.33%', padding: '0 5px' }}>
              <ImageComponent 
                imageId={24} 
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: "20px" }}
              />
              <h6>Step 1</h6>
              <h2>Inspection</h2>
              <p style={{marginLeft: '20px'}}>
                Our skilled mechanics have expertise in specific brands,<br/>  and
                thoroughly inspect bikes, focusing on brakes, tires,<br/>
                and hidden issues. They detect unusual exhaust smoke<br/>
                and engine noises.
              </p>
            </div>
            <div className="text-center" style={{ width: '33.33%', padding: '0 5px' }}>
              <ImageComponent 
                imageId={25} 
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: "20px" }}
              />
              <h6>Step 2</h6>
              <h2>Refurbishment</h2>
              <p style={{marginLeft: '20px'}}>
                Our mechanics paint & polish the bike's exterior to<br/> 
                guarantee the best appearance in addition to doing<br/>
                repairs using premium components including Amaron<br/>
                batteries, CEAT tires, and Bosch & NGK spark plugs.
              </p>
            </div>
            <div className="text-center" style={{ width: '33.33%', padding: '0 5px' }}>
              <ImageComponent 
                imageId={26} 
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: "20px" }}
              />
              <h6>Step 3</h6>
              <h2>Quality Check</h2>
              <p style={{marginLeft: '20px'}}>
              After refurbishment, our rigorous quality check follows<br/> 
              a unique 600-700 point playbook, ensuring unmatched<br/> 
              standards. If a bike doesn't meet our standards, it<br/>  undergoes
              further refurbishment promising peace of mind.
              </p>
            </div>          
          </div>
          <div className='d-flex flex-wrap justify-content-between mt-4'>
              <div className='col-12 col-md-6 mb-4'>
                <ImageComponent imageId={27} style={{ width: "100%", borderRadius: "20px" }} />
              </div>
              <div className='col-12 col-md-6 mb-4'>
                <ImageComponent imageId={28} style={{ width: "100%", borderRadius: "20px" }} />
              </div>
              <div className='col-12 col-md-6 mb-4'>
                <ImageComponent imageId={29} style={{ width: "100%", borderRadius: "20px" }} />
              </div>
              <div className='col-12 col-md-6 mb-4'>
                <ImageComponent imageId={30} style={{ width: "60%", borderRadius: "20px" }} />
              </div>
            </div>  
        </div>
      </div>
    </div>
  );
}

export default Refurbishemt;
