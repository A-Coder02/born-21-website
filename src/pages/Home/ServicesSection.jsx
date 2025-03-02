import React, { useState } from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Typography from '../../components/common/Typography'

import CheckIconPng from '../../assets/images/check-icon.png'
import CheckIconPng2 from '../../assets/images/check-icon-2.png'
import Button from '../../components/common/Button'

import LinkedingSvg from '../../assets/svgs/linkedin.svg'
import { emailAddress, linkedinUrl, openCalendly } from '../../utils/urls'
import { motion } from "framer-motion";
import RightArrowSvg from '../../assets/images/Vector-2.png'

const ServicesSection = () => {
    const headline = 'Building Brands That Own YouTube'
    const content = 'Most brands struggle with YouTube. We fix that. Our consulting and full-management services transform underperforming channels into brand-building powerhouses'
    const chip = 'Strategic & Scalable'
    const contentCard = [
        {
            id: 1,
            title: 'Growth Consulting',
            small: 'Full Youtube Management',
            lead: 'For brands that want expert guidance to Scale',
            list: [
                'Bi-weekly consulting calls',
                'Content strategy planning',
                'Thumbnail & title ideation',
                'Video performance reviews',
                'Shorts Strategy ',
                'Team training & SOPs',
            ],
            ctxText: `Let's Talk`,
            bgColor: '#EDFBFF',
            uiColor: '#B5EFFF',
            titleColor: '#1EBCFF',
            icon: CheckIconPng,
            tabText: 'Growth Consulting'
        },
        {
            id: 2,
            title: 'Full Management',
            small: 'Learn Youtube magic from us',
            lead: 'For brands that want a fully managed YouTube Channel',
            list: [
                'Everything in Growth Consulting ',
                'Thumbnail design & optimization',
                'Video Edits (Long + Shorts)*',
                'Active channel management',
                'Performance tracking & Optimization',
                'Backlog optimization',
            ],
            ctxText: `Let's Talk`,
            bgColor: '#EBFEF6',
            uiColor: '#A4F6D6',
            titleColor: '#0ABF8F',
            icon: CheckIconPng2,
            tabText: 'Full Management'
        },
    ]

    const [active, setActive] = useState(0)

    return (
        <>
            <Section id='services' sectionClassName='bg-info-dark' containerClassName='md:py-28 py-12 min-h-[38rem]  md:min-h-[44rem]' >
                <div className='max-w-[60rem] mx-auto px-12 md:px-0'>
                    {/* <p className='bg-primary-light  mx-auto mb-8 md:text-lg rounded-4xl py-3 px-4 text-center uppercase font-medium max-w-fit md:max-w-xs' >{chip}</p> */}
                    <p className='bg-info text-white max-w-fit py-3 px-5 md:px-12 rounded-4xl uppercase mx-auto mb-8 md:mb-8  text-sm md:text-base font-medium text-center min-w-52' >{chip}</p>
                    <h3 className='text-white text-center font-nohemi font-extrabold text-2xl md:text-5xl md:px-0 mb-5' >{headline}</h3>
                    <p variant='xl' className='text-white text-base md:text-lg max-w-[50.7rem] mx-auto text-center' >{content}</p>
                </div>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[60rem] mx-auto md:mt-[-23rem] md:mb-24 mb-16 mt-[-15rem] p-4">
                <div className="flex flex-col gap-8 md:hidden">
                    <div className=" mx-auto bg-primary-light py-1 px-2 flex gap-2 rounded-4xl">
                        {contentCard.map((c, index) =>
                            <div key={c.id}
                                onClick={() => setActive(index)}
                                className={`${active === index ? "bg-green" : 'bg-transparent'} ${active === index ? "text-white" : 'text-black'} transition font-medium rounded-4xl py-2 px-4 flex-1 text-nowrap`}>
                                {c.tabText}
                            </div>
                        )}
                    </div>
                    <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ServiceCard key={active} card={contentCard.find((card, index) => index === active)} />
                    </motion.div>
                </div>
                <div className="hidden md:grid md:col-span-2 md:grid-cols-2 gap-4">
                    {contentCard.map((card, index) =>
                        <div className="col-span-1">
                            <ServiceCard key={index} card={card} />
                        </div>
                    )}
                </div>
                {/* <div className="group overflow-hidden relative md:col-span-2 bg-info-primary rounded-4xl aspect-[9/10] md:aspect-auto md:h-full">
                    <div className="absolute bottom-[-4rem] right-0">
                        <img onClick={() => window.open(linkedinUrl)} src={LinkedingSvg} className=' cursor-pointer transition-all hover:brightness-110 group-hover:z-10 w-64 h-w-64 pr-4 pb-4 rotate-[-16deg]  group-hover:rotate-0 scale-110 group-hover:scale-100 relative top-10 group-hover:top-[-4rem] left-10 group-hover:left-0 ' alt="" />
                    </div>
                    <div className="py-20 md:px-24 px-8 relative">
                        <h2 className='font-nohemi font-semibold md:text-5xl text-2xl text-white mb-6 md:mb-12' >
                            Don’t find what you’re
                            <br />
                            looking for, email us at <br />
                            <a href={`mailto:${emailAddress}`} className='text-primary transition-all block hover:scale-105 cursor-pointer' >
                                {emailAddress}
                            </a>
                        </h2>
                        <p className='text-white text-lg md:text-3xl max-w-3xs md:max-w-fit' onClick={() => window.open(linkedinUrl)} >Or reach out to our founder on
                            Linkedin</p>
                    </div>

                </div> */}
            </div >
        </>

    )
}

export default ServicesSection

const ServiceCard = ({ card }) => {
    return <div className="relative group">
        {/* <div className="flex-1 p-7 pb-36 transition-all duration-500 rounded-4xl absolute w-full top-0 group-hover:top-[-4.5rem]"
            style={{
                backgroundColor: card.uiColor,
                color: card.bgColor
            }}
        >
            <p className="text-xl font-medium">{card.small}</p>
        </div> */}
        <div className="flex-1 p-7 rounded-4xl relative" style={{
            backgroundColor: card.bgColor
        }}>
            <div className="flex gap-3 mb-5">
                {new Array(3).fill(0).map((elt, index) =>
                    <div key={index} className={`w-4 h-4 md:w-6 md:h-6 rounded-full`} style={{
                        backgroundColor: card.uiColor
                    }}></div>
                )}

            </div>

            <h4 className=' md:text-4xl text-3xl font-medium mb-5' style={{
                color: card.titleColor
            }} >{card.title}</h4>
            <p className='mb-6 text-base md:text-[1.375rem] font-medium max-w-2xs' >{card.lead}</p>
            {/* <Typography variant='lg' className='mb-6' >{card.lead}</Typography> */}
            <ul className="flex flex-col gap-4 mb-6" type='none' >
                {
                    card.list.map((li, index) =>
                        <li key={index} className="flex items-center gap-2">
                            <img src={card.icon} alt="" className='w-5 h-5' />
                            <span className='text-sm md:text-base' >{li}</span>
                            {/* <Typography variant='base' className='' >{li}</Typography> */}
                        </li>
                    )
                }
            </ul>
            <Button onClick={openCalendly} endIcon={<img src={RightArrowSvg} className='!font-normal tracking-normal invert w-4 md:w-4 relative bottom-0.5' />} size='md' rounded={false} className='w-full !py-3 mb-6 flex gap-2 items-center' >{card.ctxText}</Button>
        </div>
    </div>
}