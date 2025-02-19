import React from 'react'
import ServiceHeroSection from './ServiceHeroSection'
import ServiceAboutSection from './ServiceAboutSection'
import ServiceDetailsSection from './ServiceDetailsSection'

import SampleIcon from '../../assets/images/brand.png'
import TestimonialSection from '../Home/TestimonialSection'
import FooterSection from '../Home/FooterSection'
import services from '../../data/services'
import { useParams } from 'react-router-dom'
const Services = () => {
    const title = useParams()?.title
    // const card = {
    //     theme: {
    //         bgColor: 'bg-green-dark',
    //         primary: {
    //             DEFAULT: '#0ABF8F',
    //             dark: '#012D26',
    //             light: '#0ABF8F'
    //         },
    //         batchTextColor: 'white',
    //     },
    //     // Hero and Card Section
    //     titleColor: '#0ABF8F',
    //     small: 'Finance Case Study',
    //     headline: '937% Watch-Time Surge',
    //     leadContent: 'How We Grew a Niche Finance Channel from 571K to 3.2M Views in Just 4 Months',
    //     list: [
    //         { id: 1, title: '450% Growth in Monthly Views', lead: 'From 571.7K to 3.2M views in just four months' },
    //         { id: 2, title: '6X Revenue Increase', lead: 'Monthly YouTube revenue jumped from $5,359 to $29,081' },
    //         { id: 3, title: 'Unlocked YouTube’s Browse & Suggested Traffic', lead: 'Expanded beyond search-based growth' },
    //         { id: 4, title: 'Shorts Strategy That Went Viral', lead: 'Repurposed content drove cross-platform success' },
    //     ],
    //     // About Section
    //     about: {
    //         headline: 'A Niche Finance Channel Stuck in Stagnation',
    //         lead: 'Despite an engaged subscriber base, growth had stalled. The channel was overly reliant on search traffic, with little traction from YouTube’s suggested videos or browse features. Expanding reach seemed impossible without sacrificing the brand’s authority.'
    //     },
    //     // Details Section
    //     details: {
    //         headline: 'Our comprehensive YouTube strategy transformed the channel into a high-growth asset.',
    //         headlineHighlightSmall: 'high-growth asset.',
    //         list: [
    //             {
    //                 icon: SampleIcon,
    //                 title: 'Unlocking a “Hidden” Audience',
    //                 lead: 'Proved that niche finance channels can achieve substantial new viewership when broader topics and reaction formats are introduced'
    //             },
    //             {
    //                 icon: SampleIcon,
    //                 title: '$5,359 to $29,081',
    //                 lead: 'Revenue skyrocketed—despite the client’s initial lack of focus on profitability'
    //             },
    //             {
    //                 icon: SampleIcon,
    //                 title: 'Dynamic Thumbnail & Title Strategy',
    //                 lead: 'Switching to a broader design/message after three days helped attract new eyes from YouTube’s recommended feed'
    //             },
    //             {
    //                 icon: SampleIcon,
    //                 title: 'Cross-Platform Success',
    //                 lead: 'Repurposed Shorts found viral success on Instagram and TikTok, further boosting brand visibility beyond YouTube'
    //             },
    //         ]
    //     },
    //     testimonial: {
    //         theme: {
    //             bgClassName: 'bg-green-dark',
    //             headlineClassName: 'text-white',
    //             chipClassName: 'bg-green text-white',
    //             // Card
    //             cardClassName: {
    //                 container: 'bg-green-light',
    //                 title: 'text-green-dark-2',
    //             },
    //             sliderClassName: {
    //                 active: 'bg-green',
    //                 default: 'bg-green-dark-2'
    //             }
    //         },
    //     }
    // }
    const card = services.find(service => service.small === title.replaceAll("%", " "));

    return (
        <main className={`bg-${card.theme.bgColor}`}>
            <ServiceHeroSection card={card} />
            <ServiceAboutSection about={card.about} />
            <ServiceDetailsSection details={card.details} />
            <TestimonialSection theme={card.testimonial.theme} />
            <FooterSection headlineClassName='text-white' />
        </main >
    )
}

export default Services;




