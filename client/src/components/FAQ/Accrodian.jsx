import React from 'react'
import FAQ from './FAQ'
import { Link } from 'react-router-dom'

const Accordion = () => {
  return (
    <div className="p-4"style={{backgroundColor:"#dee0e5"}}>
      <FAQ 
        Header={"How does BikeCart procure bikes ?"}
        Body={"We procure our bikes directly from verified sellers. Our experts refurbish the bikes to ensure your ride is as good as new."}
      />
      <FAQ 
        Header={"Is the price of the bike negotiable ?"}
        Body={"No. We operate on a fixed-price model and do not give discounts over and above the prices mentioned on the website."}
      />
      <FAQ 
        Header={"Can I return the bike If I'm not statisfied?"}
        Body={"Yes, you can return the bike within 3 days."}
      />
      <FAQ 
        Header={"If I didn't buy the bike the reservation amount redfunded ?"}
        Body={"Yes, It will refund to your account within 7 days."}
      />
      <div className='py-4'>
      <p>More Questions in mind 
        <Link to="faq" className='text-decoration-none'>
        <span className='px-2'>
           Learn More</span>
          </Link>
      </p>
      </div>
    </div>
  )
}

export default Accordion
