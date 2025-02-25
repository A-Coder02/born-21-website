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
        <Section sectionClassName='mt-18 pt-4 md:mb-36 mb-16'>
            <div className="flex flex-col gap-0 max-w-[50rem] mx-auto items-end">
                <div className="about-headline-wrapper flex-1 flex flex-col gap-2 md:gap-3 mx-auto">
                    <div className="about-headline-item flex gap-4 items-center ">
                        <motion.div
                            className="about-headline-graphic overflow-hidden h-12 md:h-24 relative rounded-full flex-1 bg-transparent"
                            initial={{ flex: 0 }}
                            whileInView={{ flex: 1 }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-12 md:h-34 absolute top-0 left-0 w-screen mx-auto" style={{
                                backgroundImage: `url(${YTGraphicSvg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain'
                            }}></div>
                        </motion.div>
                        <h2 className='font-nohemi font-semibold text-5xl md:text-[6.25rem]' >Youtube</h2>
                    </div>
                    <div className="about-headline-item flex gap-4 items-center">
                        <h2 className='font-nohemi font-semibold text-5xl md:text-[6.25rem] text-nowrap' >Growth Agency</h2>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 mt-7 md:mt-11">
                    <motion.div
                        className='flex-1 relative'
                        initial={{ opacity: 0, left: -50 }}
                        whileInView={{ opacity: 1, left: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-2xl md:text-xl font-medium flex-1' >
                            Born21 Media is a YouTube Growth agency committed to helping mid to large-sized brands & businesses <br />
                            <span className='text-gray-400 inline pl-1' >
                                transform their YouTube presence into a powerful digital asset
                            </span>
                        </p>
                    </motion.div>
                    <motion.div
                        className='flex-1 relative'
                        initial={{ opacity: 0, right: -50 }}
                        whileInView={{ opacity: 1, right: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-base md:text-base flex-1' >Our expertise spans consulting services and done-for-you solutions, enabling brands to create engaging content that resonates deeply with their audience. By building organic brand equity, we help reduce reliance on ads, boost credibility, and deliver long-term growth. </p>
                    </motion.div>
                </div>

            </div>
        </Section>
    );
};

export default AboutSection;
