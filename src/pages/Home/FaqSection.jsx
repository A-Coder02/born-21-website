import React, { useState } from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Typography from '../../components/common/Typography';
import Button from '../../components/common/Button';

import ButtonIcon from '../../assets/images/Vector-2.png'
import Accordion from '../../components/layout-ui/Accordion';

const FaqSection = () => {
    const headline = 'Straight Answers on YouTube Growth';
    const ctaText = 'Start your YouTube evolution – book a call';
    const accordionData = [
        {
            id: 1,
            title: 'Who do we work with?',
            content: 'Mid to large businesses ($100K+ monthly revenue) with a marketing team ready to scale their YouTube presence.',
        },
        {
            id: 2,
            title: 'How does your YouTube Consulting service differ from YouTube Management Service?',
            content: 'Consulting: We strategize, your team executes.\nManagement: We handle everything post-production while you focus on creating.',
        },
        {
            id: 3,
            title: 'What kind of results can I expect, and how long do they take?',
            content: 'Our clients average 30-40% monthly growth, with noticeable results within 60-90 days of consistent content.',
        },
        {
            id: 4,
            title: 'Do you guarantee revenue increases or direct sales?',
            content: 'We focus on building brand authority and audience trust, which naturally drives long-term revenue growth.',
        },
        {
            id: 5,
            title: 'Do you write scripts?',
            content: 'Scripts come from you—the expert. We guide content structure and strategy to maximize impact.',
        },
    ];

    const [activeAccordion, setActiveAccordion] = useState(null)

    return (
        <Section>
            <div className="flex justify-between max-w-[90rem] mx-auto mb-28">
                <div className="max-w-[33rem]">
                    <Headline variant='h5' className='!font-medium mb-7 font-nueue' >{headline}</Headline>
                    <Button size='md' variant='primary' className='text-black' endIcon={<img src={ButtonIcon} className='invert-100 w-4 h-4' />} >{ctaText}</Button>
                </div>
                <ul type='none' className='w-[35rem]' >
                    {
                        accordionData.map((accordion, index) =>
                            <Accordion key={index}
                                onClick={() => setActiveAccordion(index === activeAccordion ? null : index)}
                                expand={index === activeAccordion}
                                title={accordion.title} content={accordion.content} />
                        )
                    }
                </ul>
            </div>
        </Section>
    )
}

export default FaqSection