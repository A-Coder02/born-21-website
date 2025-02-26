import React from 'react'
import { motion } from 'framer-motion'
import Section from '../../components/layout-ui/Section'

import Step1Svg from '../../assets/svgs/steps/step_1.svg';
import Step2Svg from '../../assets/svgs/steps/step_2.svg';
import Step3Svg from '../../assets/svgs/steps/step_3.svg';

const StepsSection = () => {
    const chip = 'Our Process, Your Growth'
    const headline = 'Proven framework to turn content into a growth engine'
    const lead = 'Data-backed, systematic approach to optimizing, scaling, and sustaining YouTube growth—so your content consistently drives views, engagement, and revenue.'

    const list = [
        { id: 1, icon: Step1Svg, className: 'bg-blue-light', title: 'Analyze', lead: 'Evaluate & audit your brand and identify your perfect audience segment' },
        { id: 2, icon: Step2Svg, className: 'bg-primary-light', title: 'Execute', lead: 'Implement data-backed strategies built on real audience feedback' },
        { id: 3, icon: Step3Svg, className: 'bg-pink-light', title: 'Scale', lead: `A/B test and iterate to amplify your channel's growth` },
    ]

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.25, duration: 0.8, ease: "easeOut" }
        })
    }

    return (
        <Section sectionClassName='py-20 md:py-32' >
            <div className="max-w-[90rem] mx-auto bg-[#045041] p-6 py-12 md:p-8 rounded-4xl md:px-24 md:py-20 my-0 md:my-0">
                <p className='bg-green-light max-w-fit py-3 px-5 md:px-12 rounded-4xl uppercase mx-auto mb-4 md:mb-7 text-sm md:text-base font-medium text-[[#045041]] text-center'>
                    {chip}
                </p>
                <h3 className='text-white text-center font-nohemi font-extrabold text-2xl md:text-5xl md:px-64 mb-5'>
                    {headline}
                </h3>
                <p className='text-center text-white mb-8 md:mb-14 text-base md:text-2xl md:px-26'>{lead}</p>

                <ul className="grid md:grid-cols-3 gap-10 md:gap-5 list-none px-2 md:px-12">
                    {list.map((el, index) => (
                        <motion.li
                            key={index}
                            className={`bg-white rounded-3xl w-full p-10`}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={index} // Controls stagger delay
                        >
                            <img src={el.icon} className='w-16 h-16 mb-6' alt={el.title} />
                            <div className="flex gap-4 items-center mb-3.5">
                                <span className='font-nohemi text-2xl'>0{index + 1}</span>
                                <div className="span flex-1 h-0 w-full border-t p-0 m-0 border-gray-700"></div>
                            </div>
                            <div>
                                <h4 className='md:text-lg font-medium mb-1'>{el.title}</h4>
                                <p className='text-sm'>{el.lead}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default StepsSection
