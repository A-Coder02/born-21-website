import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Typography from '../../components/common/Typography'

import Step1Svg from '../../assets/svgs/steps/step-1.svg';
import Step2Svg from '../../assets/svgs/steps/step-2.svg';
import Step3Svg from '../../assets/svgs/steps/step-3.svg';

const StepsSection = () => {
    const chip = 'Our Process, Your Growth'
    const headline = 'Proven framework to turn content into a growth engine'
    const lead = 'Data-backed, systematic approach to optimizing, scaling, and sustaining YouTube growth—so your content consistently drives views, engagement, and revenue.'
    const list = [
        { id: 1, icon: Step1Svg, className: 'bg-blue-light', title: 'Analyze', lead: 'Evaluate & audit your brand and identify your perfect audience segment' },
        { id: 2, icon: Step2Svg, className: 'bg-primary-light', title: 'Execute', lead: 'Implement data-backed strategies built on real audience feedback' },
        { id: 3, icon: Step3Svg, className: 'bg-pink-light', title: 'Scale', lead: `A/B test and iterate to amplify your channel's growth` },
    ]
    return (
        <Section sectionClassName='bg-green-dark-2 py-4 md:py-32' >
            <div className="max-w-[90rem] mx-auto bg-white rounded-4xl px-24 py-20">
                <p className='bg-green-light mx-auto mb-8 md:text-lg rounded-4xl py-3 px-4 text-center uppercase font-medium max-w-fit' >{chip}</p>
                <Headline className={`text-[#045041] px-20 text-center !font-extrabold mb-4`} >{headline}</Headline>
                <Typography variant='xl' className='text-center mb-12'>
                    {lead}
                </Typography>
                <ul className="grid grid-cols-3 gap-5 list-none">
                    {list.map((el, index) => <li key={index} className={`${el.className} rounded-3xl w-full flex flex-col gap-8 p-10`} >
                        <img src={el.icon} className='w-16 h-16' alt="" />
                        <div className="flex gap-4 items-center">
                            <span className='font-nohemi text-2xl'>
                                0{index + 1}
                            </span>
                            <div className="span flex-1 h-0 w-full border border-[0.5px] border-gray-700"></div>
                        </div>
                        <div className="">
                            <h3 className='md:text-lg font-medium' >{el.title}</h3>
                            <p className='text-base' >{el.lead}</p>
                        </div>
                    </li>)}
                </ul>
            </div>
        </Section>
    )
}

export default StepsSection