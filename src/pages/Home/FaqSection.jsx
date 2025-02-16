import React from 'react'
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

    return (
        <Section>
            <div className="flex justify-between">
                <div className="">
                    <Headline variant='h5' className='font-medium mb-7' >{headline}</Headline>
                    <Button size='md' variant='primary' className='text-black' endIcon={<img src={ButtonIcon} className='invert-100 w-4 h-4' />} >{ctaText}</Button>
                </div>

                {/* <ul type='none' className='flex_0_0_35rem' >
                    <Accordion title={'Red'} content={'Blue'} />
                </ul> */}
            </div>
        </Section>
    )
}

export default FaqSection