import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Typography from '../../components/common/Typography'

// Images
import AboutGraphicImage1 from '../../assets/images/about-grahic1.png'
import AboutGraphicImage2 from '../../assets/images/about-grahic2.png'
import AboutGraphicImage3 from '../../assets/images/about-grahic3.png'

const AboutSection = () => {

    const aboutParagraph = 'Born21 Media LLC is a YouTube Growth agency committed to helping mid to large-sized brands & businesses transform their YouTube presence into a powerful digital asset'

    return (
        <>
            <Section sectionClassName='mt-24 mb-72' >
                <div className="flex gap-12 max-w-4xl mx-auto items-end ">
                    <div className="about-headline-wrapper flex-1 flex flex-col gap-6">
                        <div className="about-headline-item flex gap-4 items-center">
                            <div className="about-headline-graphic overflow-hidden h-22 relative rounded-full flex-1 bg-info"
                            >
                                <img src={AboutGraphicImage1} alt="" className='absolute top-5 left-4 w-screen mx-auto' />
                            </div>
                            <Headline variant='h3' >
                                Based
                            </Headline>
                        </div>
                        <div className="about-headline-item flex gap-4 items-center">
                            <Headline variant='h3' >
                                in
                            </Headline>
                            <div className="about-headline-graphic overflow-hidden h-22 relative rounded-full flex-1 bg-primary">
                                <img src={AboutGraphicImage2} alt="" className='absolute top-5 left-4 w-screen mx-auto' />
                            </div>
                        </div>
                        <div className="about-headline-item flex gap-4 items-center">
                            <div className="about-headline-graphic overflow-hidden h-22 relative rounded-full flex-1 bg-info">
                                <img src={AboutGraphicImage3} alt="" className='absolute top-5 left-4 w-screen mx-auto' />
                            </div>
                            <Headline variant='h3' >
                                New York
                            </Headline>
                        </div>
                    </div>


                    <Typography variant='lg' className=' font-medium flex-1 max-w-[13.6875rem]' >
                        {aboutParagraph}
                    </Typography>
                </div>
            </Section>

        </>
    )
}

export default AboutSection