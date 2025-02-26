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
import Section from '../../components/layout-ui/Section'
import { emailAddress } from '../../utils/urls'

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
                <Section>
                    <h2 className='font-nohemi font-bold md:text-5xl text-2xl text-blue md:text-center mb-6 md:mb-4' >
                        Didn't find what you're looking for?
                        <br />

                    </h2>
                    <p className='md:text-3xl text-xl md:text-center font-medium mb-28' >
                        <span>
                            Email us at
                        </span>
                        <span className='font-nohemi inline-block ml-2 text-blue transition-all hover:scale-110 relative left-0 hover:left-4'>
                            <a href={`mailto:${emailAddress}`} className='inline transition underline cursor-pointer'>
                                {emailAddress}
                            </a>
                        </span>

                    </p>
                </Section>
                <TestimonialSection theme={theme} />
                <FaqSection />
                <FooterSection />
            </PageTransition>
        </main>
    )
}

export default Home