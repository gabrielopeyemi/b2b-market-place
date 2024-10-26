import PartnershipCard from './../../../components/shared/partnershipCard'
import React from 'react'
import image from './../../../assets/images/image-32.png'

const RequestList = () => {
  return (
    <PartnershipCard image={image} name='Parallel Facility Co.' type='FACULTY MANAGMENT' location='Benue,Nigeria' rating={4.8} isVerified noOfPartners={156} reviews={112}/>
  )
}

export default RequestList