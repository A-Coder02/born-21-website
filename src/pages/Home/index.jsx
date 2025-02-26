import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import OurWorkSection from './OurWorkSection'
import ServicesSection from './ServicesSection'
import TestimonialSection from './TestimonialSection'
import FaqSection from './FaqSection'
import FooterSection from './FooterSection'
import { motion } from "framer-motion";
import PageTransition from '../../components/layout-ui/PageTransition'
import StepsSection from './StepsSection'
import services from '../../data/services'

const Home = () => {
    const theme = services[1].testimonial.theme
    return (
        <main className='' >
            <PageTransition>
                <HeroSection />
                <AboutSection />
                <OurWorkSection />
                <ServicesSection />
                <StepsSection />
                <TestimonialSection theme={theme} />
                <FaqSection />
                <FooterSection />
            </PageTransition>
        </main>
    )
}

export default Home