import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Typography from '../../components/common/Typography'

import CheckIconPng from '../../assets/images/check-icon.png'
import Button from '../../components/common/Button'

const ServicesSection = () => {
    const headline = 'Built for Long-Term YouTube Success'
    const content = 'We provide consulting and done-for-you solutions that help brands create engaging content, build organic brand equity, and reduce reliance on ads—driving credibility and sustainable growth.'

    const contentCard = [
        {
            id: 1,
            title: 'Done-For-You (DFY)',
            lead: 'We handle everything—so you can focus on your business',
            list: [
                'Full post-production for long-form content',
                'Shorts strategy and execution',
                'Active channel management',
                'Thumbnail & title optimization',
                'SEO & performance tracking',
                'Complete backlog transformation',
                'Competitor analysis & benchmarking'
            ],
            ctxText: 'Hand Over the Reins',
            bgColor: '#00916E',
            uiColor: '#D0FBE8'
        },
        {
            id: 2,
            title: 'Done-With-You (DWY)',
            lead: 'We guide your team to create high-performing content',
            list: [
                'Bi-weekly strategy sessions',
                'Fresh content ideas for your queue',
                'Thumbnail & title brainstorming',
                'Video performance reviews',
                'Custom team playbooks (optional)',
                'Calendar planning & workflow optimization',
                'Retention & engagement strategies'
            ],
            ctxText: 'Power Up Your Team',
            bgColor: '#E30090',
            uiColor: '#FFE2FB'
        },
    ]

    return (
        <>
            <Section sectionClassName='bg-primary' containerClassName='py-28 min-h-[44rem]' >
                <div className='max-w-[58rem] mx-auto'>
                    <Headline variant='h5' className='text-center mb-7'>{headline}</Headline>
                    <Typography variant='xl' className='max-w-[50rem] mx-auto text-center' >{content}</Typography>
                </div>

            </Section>
            <div className="flex gap-8 max-w-[60rem] mx-auto mt-[-20rem] mb-[8.5rem]">
                {contentCard.map((card, index) => <ServiceCard key={index} card={card} />)}
            </div>
        </>

    )
}

export default ServicesSection

const ServiceCard = ({ card }) => {
    return <div className="text-white flex-1 p-7 rounded-4xl" style={{
        backgroundColor: card.bgColor
    }}>
        <div className="flex gap-3 mb-5">
            <div className={`w-6 h-6 rounded-full`} style={{
                backgroundColor: card.uiColor
            }}></div>
            <div className={`w-6 h-6 rounded-full`} style={{
                backgroundColor: card.uiColor
            }}></div>
            <div className={`w-6 h-6 rounded-full`} style={{
                backgroundColor: card.uiColor
            }}></div>
        </div>

        <Typography variant='5xl' className='font-medium mb-5' >{card.title}</Typography>
        <Typography variant='lg' className='font-medium mb-6' >{card.lead}</Typography>
        <ul className="flex flex-col gap-4 mb-6" type='none' >
            {
                card.list.map((li, index) =>
                    <li key={index} className="flex items-center gap-2">
                        <img src={CheckIconPng} alt="" className='w-5 h-5' />
                        <Typography variant='base' className='font-medium' >{li}</Typography>
                    </li>
                )
            }

        </ul>
        <Button size='md' rounded={false} className='w-full !py-3' >{card.ctxText}</Button>
    </div>
}