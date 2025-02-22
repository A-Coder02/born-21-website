import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Typography from '../../components/common/Typography'

const ServiceAboutSection = ({ about }) => {
    return (
        <Section containerClassName='text-white md:text-center pb-16' >
            <div className="mx-auto max-w-[70rem] flex flex-col gap-6">
                <Headline>{about.headline}</Headline>
                <Typography variant='3xl'>{about.lead}</Typography>
            </div>
        </Section>
    )
}

export default ServiceAboutSection