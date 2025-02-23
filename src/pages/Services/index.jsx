import React from 'react'
import ServiceHeroSection from './ServiceHeroSection'
import ServiceAboutSection from './ServiceAboutSection'
import ServiceDetailsSection from './ServiceDetailsSection'

import SampleIcon from '../../assets/images/brand.png'
import TestimonialSection from '../Home/TestimonialSection'
import FooterSection from '../Home/FooterSection'
import services from '../../data/services'
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion";
import PageTransition from '../../components/layout-ui/PageTransition'
const Services = () => {
    const title = useParams()?.title

    const card = services.find(service => service.small === title.replaceAll("%", " "));


    return (
        <main className={`bg-${card.theme.bgColor}`}>
            <PageTransition>
                <ServiceHeroSection card={card} />
                <ServiceAboutSection about={card.about} />
                <ServiceDetailsSection details={card.details} theme={card.theme} />
                <TestimonialSection theme={card.testimonial.theme} headline={card.testimonial.headline} />
                <div className="md:h-32 h-14"></div>
                <FooterSection headlineClassName='text-white' />
            </PageTransition>
        </main >


    )
}

export default Services;




