import React from 'react';
import Section from '../../components/layout-ui/Section';
import Headline from '../../components/common/Headline';
import Typography from '../../components/common/Typography';
import { motion } from "framer-motion";
// Images
import AboutGraphicImage1 from '../../assets/images/about-grahic1.png';
import AboutGraphicImage2 from '../../assets/images/about-grahic2.png';
import AboutGraphicImage3 from '../../assets/images/about-grahic3.png';
import YTGraphicSvg from '../../assets/svgs/YT-Graphic-SVG.svg'

const AboutSection = () => {
    const aboutParagraph = 'Born21 Media LLC is a YouTube Growth agency committed to helping mid to large-sized brands & businesses transform their YouTube presence into a powerful digital asset';

    return (
        <Section sectionClassName='mt-18 pt-4 mb-48'>
            <div className="flex flex-col gap-12 max-w-[75rem] mx-auto items-end">
                <div className="about-headline-wrapper flex-1 flex flex-col gap-6">
                    <div className="about-headline-item flex gap-4 items-center">
                        <motion.div
                            className="about-headline-graphic overflow-hidden h-32 relative rounded-full flex-1 bg-transparent"
                            initial={{ flex: 0 }}
                            whileInView={{ flex: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="h-34 absolute top-0 left-0 w-screen mx-auto" style={{
                                backgroundImage: `url(${YTGraphicSvg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '38rem'
                            }}></div>
                        </motion.div>
                        <Headline variant='h2' className='!font-medium' >Youtube</Headline>
                    </div>
                    <div className="about-headline-item flex gap-4 items-center">
                        <Headline variant='h2' className='!font-medium'>Growth Agency</Headline>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <p className='text-3xl font-medium flex-1' >
                        Born21 Media is a YouTube Growth agency committed to helping mid to large-sized brands & businesses
                        <span className='text-gray-400 inline pl-1' >
                            transform their YouTube presence into a powerful digital asset
                        </span>
                    </p>
                    <p className='text-base md:text-xl flex-1' >Our expertise spans consulting services and done-for-you solutions, enabling brands to create engaging content that resonates deeply with their audience. By building organic brand equity, we help reduce reliance on ads, boost credibility, and deliver long-term growth. </p>
                </div>

            </div>
        </Section>
    );
};

export default AboutSection;
