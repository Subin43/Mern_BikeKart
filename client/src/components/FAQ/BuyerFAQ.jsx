import React from 'react'
import FAQ from './FAQ'

const BuyerFAQ = () => {
  return (
    <div>
        <FAQ 
        Header={"How does BikeCart procure bikes ?"}
        Body={"We procure our bikes directly from verified sellers. Our experts refurbish the bikes to ensure your ride is as good as new."}
      />
      <FAQ 
        Header={"How can I book a test ride ?"}
        Body={`Find your perfect ride - Explore our diverse collection and select the bike that best matches your needs.
               Get a test drive - Pay the reservation amount. Test drive at Home or Hub. 100% refundable.
               Complete purchase & get riding - 3-day money back guarantee & hassle free RC transfer.`}
      />
      <FAQ 
        Header={"Who will handle the RC transfer ?"}
        Body={"BikeKart will handle the RC transfer process for you."}
      />
      <FAQ 
        Header={"Once the payment is made what is the estimated delivery time?"}
        Body={"The bike is delivered immediately after the full payment for the bike is made."}
      />
      <FAQ 
        Header={"What are the modes of payments for buying ?"}
        Body={"We accept all major credit/debit cards, net banking and UPI"}
      />
      <FAQ 
        Header={"Do I have to pay for doorstep delivery"}
        Body={"No. It's absolutely free"}
      />
      <FAQ 
        Header={"Is the price of the bike negotiable?"}
        Body={"No. We operate on a fixed-price model and do not give discounts over and above the prices mentioned on the website."}
      />
      <FAQ 
        Header={"What are the documents required during bike delivery ?"}
        Body={`Keep the following original documents handy at the time of bike delivery
               Aadhaar card
               PAN card .
               Current address proof`}
      />
    </div>
  )
}

export default BuyerFAQ