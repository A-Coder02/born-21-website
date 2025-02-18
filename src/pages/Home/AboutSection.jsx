import React from 'react';
import Section from '../../components/layout-ui/Section';
import Headline from '../../components/common/Headline';
import Typography from '../../components/common/Typography';
import { motion } from "framer-motion";
// Images
import AboutGraphicImage1 from '../../assets/images/about-grahic1.png';
import AboutGraphicImage2 from '../../assets/images/about-grahic2.png';
import AboutGraphicImage3 from '../../assets/images/about-grahic3.png';

const AboutSection = () => {
    const aboutParagraph = 'Born21 Media LLC is a YouTube Growth agency committed to helping mid to large-sized brands & businesses transform their YouTube presence into a powerful digital asset';

    return (
        <Section sectionClassName='mt-24 mb-72'>
            <div className="flex gap-12 max-w-4xl mx-auto items-end">
                <div className="about-headline-wrapper flex-1 flex flex-col gap-6">
                    <div className="about-headline-item flex gap-4 items-center">
                        <motion.div
                            className="about-headline-graphic overflow-hidden h-22 relative rounded-full flex-1 bg-info"
                            initial={{ flex: 0 }}
                            whileInView={{ flex: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <motion.div className='h-22 absolute top-5 left-4 w-screen mx-auto'
                                initial={{ left: 64 }}
                                whileInView={{ left: 16 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            >
                                <img src={AboutGraphicImage1} alt="" className='h-24 w-fit' />
                            </motion.div>
                        </motion.div>
                        <Headline variant='h3'>Based</Headline>
                    </div>
                    <div className="about-headline-item flex gap-4 items-center justify-end">
                        <Headline variant='h3'>in</Headline>
                        <motion.div
                            className="about-headline-graphic overflow-hidden h-22 relative rounded-full flex-1 bg-primary"
                            initial={{ flex: 0 }}
                            whileInView={{ flex: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <motion.div className='h-22 absolute top-5 left-4 w-screen mx-auto'
                                initial={{ left: 64 }}
                                whileInView={{ left: 16 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            >
                                <img src={AboutGraphicImage2} alt="" className='h-24 w-fit' />
                            </motion.div>
                        </motion.div>

                    </div>
                    <div className="about-headline-item flex gap-4 items-center">
                        <motion.div
                            className="about-headline-graphic overflow-hidden h-22 relative rounded-full flex-1 bg-info"
                            initial={{ flex: 0 }}
                            whileInView={{ flex: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <motion.div className='h-22 absolute top-5 left-4 w-screen mx-auto'
                                initial={{ left: 64 }}
                                whileInView={{ left: 16 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            >
                                <img src={AboutGraphicImage3} alt="" className='h-24 w-fit' />
                            </motion.div>
                        </motion.div>
                        <Headline variant='h3'>New York</Headline>
                    </div>
                </div>

                <Typography variant='lg' className='font-medium flex-1 max-w-[13.6875rem]'>
                    {aboutParagraph}
                </Typography>
            </div>
        </Section>
    );
};

export default AboutSection;
