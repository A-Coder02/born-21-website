import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Typography from '../../components/common/Typography'

const ServiceAboutSection = ({ about }) => {
    return (
        <Section containerClassName='text-white md:text-center' >
            <div className="mx-auto max-w-[70rem] flex flex-col pb-14 md:pb-28">
                <h5 className='font-nohemi text-3xl md:text-4xl font-semibold mb-3 md:mb-4'>{about.headline}</h5>
                {/* <Headline>{about.headline}</Headline> */}
                <p className='text-base md:text-center md:text-2xl' >{about.lead}</p>
            </div>
        </Section>
    )
}

export default ServiceAboutSection