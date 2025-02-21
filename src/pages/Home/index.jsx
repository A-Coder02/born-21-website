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

const Home = () => {

    return (
        <main className='' >
            <PageTransition>
                <HeroSection />
                <AboutSection />
                <OurWorkSection />
                <ServicesSection />
                <TestimonialSection />
                <FaqSection />
                <FooterSection />
            </PageTransition>
        </main>
    )
}

export default Home