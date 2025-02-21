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
            content: 'Content Here',
        },
        {
            id: 2,
            title: 'DFY vs. DWY – What’s the difference?',
            content: 'Content HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent HereContent Here',
        },
        {
            id: 3,
            title: 'What results can I expect?',
            content: 'Content Here',
        },
        {
            id: 4,
            title: 'Do you guarantee revenue increases?',
            content: 'Content Here',
        },
        {
            id: 5,
            title: 'Do you write scripts?',
            content: 'Content Here',
        },
        {
            id: 6,
            title: 'Do you help with recording?',
            content: 'Content Here',
        },
    ]

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