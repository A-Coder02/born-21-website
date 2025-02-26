import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Button from '../../components/common/Button'

import ButtonIcon from '../../assets/images/Vector-2.png';
import BrandPng from '../../assets/images/brand-lg.png';
import Typography from '../../components/common/Typography';
import { openCalendly } from '../../utils/urls';
import Modal from '../../components/Modal';



const FooterSection = ({ headlineClassName = 'text-black' }) => {
    const headline = 'Excited? Us too!';
    const content = 'We craft scroll-stopping YouTube strategies that turn views into engagement and channels into brands.'
    const ctaContent = 'Grow My Channel';
    const links = [
        { title: 'About', link: '#about', offset: 48, },
        { title: 'Results', link: '#results', offset: 112 },
        { title: 'Services', link: '#services', offset: 0 },
        { title: 'FAQs', link: '#faqs', offset: 84 },
        { title: 'Privacy Policy', },
        { title: 'Terms Of Service', },
    ];
    function scrollToInput(inputId, offset = 0) {
        const element = document.querySelector(inputId);
        if (element) {
            // const offset = 0; // Adjust scroll position
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        } else {
            console.warn(`Element with id "${inputId}" not found.`);
        }
    }

    return (
        <Section>
            <footer className="max-w-[90rem] mx-auto md:pb-16 pb-11">
                <div className="flex mx-auto flex-col gap-4 md:flex-row md:justify-between mb-9 items-center py-8 px-7 md:py-9 md:px-12 rounded-4xl bg-gray-50">
                    {/* <Headline>{headline}</Headline> */}
                    <h5 className='text-4xl md:text-[1.375rem] font-medium flex-1' >{headline}</h5>
                    <Button variant='secondary' size='md' className='!py-6 !font-medium w-full  md:w-fit'
                        endIcon={<img src={ButtonIcon} className='w-4 h-4' />}
                        onClick={openCalendly}
                    >{ctaContent}</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <img src={BrandPng} alt="" className='' />
                    <div className="py-4 px-8 md:py-9 md:px-12 rounded-4xl bg-gray-50">
                        <p className='mb-8 font-medium !font-nueue md:text-2xl text-[1.125rem] max-w-[30rem]' >{content}</p>
                        {/* <Typographyvariant='2xl' >{content}</Typography> */}
                        <ul className="grid md:flex flex-wrap gap-x-6 md:gap-x-12 gap-y-3 grid-cols-3 list-none max-w-[22rem]">
                            {links.map(li =>
                                li.link ?
                                    <li key={li.link} className='font-normal text-sm md:text-base cursor-pointer' onClick={() => {
                                        if (li.link.includes('#')) {
                                            scrollToInput(li.link, li.offset)
                                        }
                                    }}  >{li.title}</li> :
                                    <Modal title={li.title} description={li.title} key={li.link} buttonComp={
                                        <li key={li.link} className='font-normal text-sm md:text-base cursor-pointer'>
                                            {li.title}
                                        </li>
                                    } />

                            )}
                        </ul>
                    </div>
                </div>
                <h5 className={'text-center text-[2.875rem] md:text-[12rem] font-black ' + headlineClassName}>BORN21 MEDIA</h5>
                {/* <Headline className={'text-center !text-[12rem] font-black ' + headlineClassName} >BORN21 MEDIA</Headline> */}
            </footer>


        </Section>
    )
}

export default FooterSection