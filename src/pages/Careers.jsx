import React from 'react'
import CTA from '../components/CTA'
import Faqs from '../components/Faqs'
import JobOpening from '../components/JobOpening'
import OurBenefits from '../components/OurBenefits'
import OurValues from '../components/OurValues'
import PagesHero from '../components/PagesHero'

const Careers = () => {
  return (
    <>
        <PagesHero />
        <OurValues />
        <OurBenefits />
        <JobOpening />
        <Faqs />
        <CTA />
    </>
  )
}

export default Careers