import React from 'react'
import FAQ from './FAQ'

const SellerFAQ = () => {
  return (
    <div>
        <FAQ 
        Header={"Will I get instant payment for my bike ?"}
        Body={"Yes, you will. Instant payment will be done through UPI or bank transfer. You will part with your bike only after receiving 100% payment credit."}
      />
      <FAQ 
        Header={"Does BikeKart buy bikes that are registered outside TamilNadu ?"}
        Body={`No, we currently do not accept two-wheelers
             which are not registered in Tamil Nadu.
              However, this option will be available in the future.`}
      />
      <FAQ 
        Header={"What are the charges through selling BikeKart ?"}
        Body={"Currently, BikeKart does not levy any service charge on the sellers."}
      />
      <FAQ 
        Header={"Will you provide cash for my two-wheeler ?"}
        Body={"No, we do not deal in cash. Post-sale, the money is transferred directly to your bank account."}
      />
      <FAQ 
        Header={"What happens to the bike after BikeKart buy it ?"}
        Body={`BikeKart works on both customer-to-customer and customer-to-business basis.
             After we buy your bike, we refurbish it and sell it directly to the end used or
              to one of our channel partners. The channel partners sell it further to customers.`}
      />
      <FAQ 
        Header={"Who will handle the RC transfer ?"}
        Body={"BikeKart will handle the RC transfer process for you."}
      />
      <FAQ 
        Header={"What is the time duration for RC transfer ?"}
        Body={`After you buy the bike from us, it takes approximately 60-90 RTO working days
             to get the Registration Certificate (RC) transferred to the new owner's name.
              BeepKart manages the transfer of RC so that you can relax.`}
      />
      <FAQ 
        Header={"What are the documents required to sell my old bike ?"}
        Body={`Keep the following original documents handy at the time of bike delivery
               Aadhaar card
               PAN card .
               Current address proof`}
      />
    </div>
  )
}

export default SellerFAQ