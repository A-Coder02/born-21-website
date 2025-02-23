import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Typography from '../../components/common/Typography'

import CheckIconPng from '../../assets/images/check-icon.png'
import CheckIconPng2 from '../../assets/images/check-icon-2.png'
import Button from '../../components/common/Button'

import LinkedingSvg from '../../assets/svgs/linkedin.svg'
import { emailAddress, linkedinUrl } from '../../utils/urls'

import RightArrowSvg from '../../assets/images/Vector-2.png'

const ServicesSection = () => {
    const headline = 'Built for Long-Term YouTube Success'
    const content = 'We provide consulting and done-for-you solutions that help brands create engaging content, build organic brand equity, and reduce reliance on ads—driving credibility and sustainable growth.'
    const chip = 'Strategic & Scalable'
    const contentCard = [
        {
            id: 1,
            title: 'Growth Consulting',
            small: 'Full Youtube Management',
            lead: 'Data-backed strategies to unlock sustainable YouTube growth',
            list: [
                'Bi-weekly consulting calls',
                'Content strategy planning',
                'Thumbnail & title ideation',
                'Video performance reviews',
                'Shorts Strategy ',
                'Team training & SOPs',
            ],
            ctxText: 'Get Started',
            bgColor: '#00916E',
            uiColor: '#D0FBE8',
            icon: CheckIconPng,

        },
        {
            id: 2,
            title: 'Full Management',
            small: 'Learn Youtube magic from us',
            lead: 'End-to-end YouTube management for maximum organic impact',
            list: [
                'Everything in Growth Consulting ',
                'Thumbnail design & optimization',
                'Video Edits (Long + Shorts)*',
                'Active channel management',
                'Performance tracking & Optimization',
                'Backlog optimization',
            ],
            ctxText: 'Get Started',
            bgColor: '#E30090',
            uiColor: '#FFE2FB',
            icon: CheckIconPng2,
        },
    ]

    return (
        <>
            <Section sectionClassName='bg-primary' containerClassName='md:py-28 py-12 min-h-[38rem]  md:min-h-[44rem]' >
                <div className='max-w-[58rem] mx-auto'>
                    <p className='bg-primary-light  mx-auto mb-8 md:text-lg rounded-4xl py-3 px-4 text-center uppercase font-medium max-w-fit md:max-w-xs' >{chip}</p>

                    <Headline variant='h5' className='text-center mb-7'>{headline}</Headline>
                    <Typography variant='xl' className='max-w-[50rem] mx-auto text-center' >{content}</Typography>
                </div>
            </Section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[60rem] mx-auto mt-[-16rem] mb-[8.5rem] p-4">
                {contentCard.map((card, index) => <ServiceCard key={index} card={card} />)}
                <div className="group overflow-hidden relative md:col-span-2 bg-info-primary rounded-4xl" style={{
                    // backgroundImage: `url('${LinkedingSvg}')`,
                    // color: 'red'
                    // backgroundPosition: 'bottom right'
                }} >
                    <div className="absolute bottom-0 right-0">
                        <img onClick={() => window.open(linkedinUrl)} src={LinkedingSvg} className=' cursor-pointer transition-all hover:brightness-95 group-hover:z-10 w-64 h-w-64 pr-4 pb-4 rotate-[-25deg]  group-hover:rotate-0 scale-110 group-hover:scale-100 relative top-10 group-hover:top-0 left-10 group-hover:left-0 ' alt="" />
                    </div>
                    <div className="py-20 px-24 relative">

                        <Headline variant='h5' className='text-white mb-12' >
                            Don’t find what you’re
                            <br />
                            looking for, email us at <br />
                            <a href={`mailto:${emailAddress}`} className='text-primary transition-all block hover:scale-105 cursor-pointer' >
                                {emailAddress}
                            </a>
                        </Headline>
                        <Typography variant='4xl' className='text-white' >Or reach out to our founder on Linkedin</Typography>
                    </div>

                </div>
            </div>
        </>

    )
}

export default ServicesSection

const ServiceCard = ({ card }) => {
    return <div className="relative group">
        <div className="flex-1 p-7 pb-36 transition-all duration-500 rounded-4xl absolute w-full top-0 group-hover:top-[-4.5rem]"
            style={{
                backgroundColor: card.uiColor,
                color: card.bgColor
            }}
        >
            <Typography variant='xl' className='font-medium' >{card.small}</Typography>
        </div>
        <div className="text-white flex-1 p-7 rounded-4xl relative" style={{
            backgroundColor: card.bgColor
        }}>
            <div className="flex gap-3 mb-5">
                {new Array(3).fill(0).map((elt, index) =>
                    <div key={index} className={`w-4 h-4 md:w-6 md:h-6 rounded-full`} style={{
                        backgroundColor: card.uiColor
                    }}></div>
                )}

            </div>

            <Typography variant='5xl' className='font-medium mb-5' >{card.title}</Typography>
            <Typography variant='lg' className='font-medium mb-6' >{card.lead}</Typography>
            <ul className="flex flex-col gap-4 mb-6" type='none' >
                {
                    card.list.map((li, index) =>
                        <li key={index} className="flex items-center gap-2">
                            <img src={card.icon} alt="" className='w-5 h-5' />
                            <Typography variant='base' className='font-medium' >{li}</Typography>
                        </li>
                    )
                }

            </ul>
            <Button endIcon={<img src={RightArrowSvg} className='invert w-4 h-4 md:w-6 md:h-6' />} size='md' rounded={false} className='w-full !py-3 mb-4' >{card.ctxText}</Button>
        </div>
    </div>
}