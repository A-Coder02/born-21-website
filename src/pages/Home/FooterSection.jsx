import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Button from '../../components/common/Button'

import ButtonIcon from '../../assets/images/Vector-2.png';
import BrandPng from '../../assets/images/brand-lg.png';
import Typography from '../../components/common/Typography';



const FooterSection = ({ headlineClassName = 'text-black' }) => {
    const headline = 'Excited? Us too!';
    const content = 'We craft scroll-stopping YouTube strategies that turn views into engagement and channels into brands.'
    const ctaContent = 'Grow My Channel';
    const links = [
        { title: 'About', link: 'about' },
        { title: 'Results', link: 'results' },
        { title: 'Services', link: 'services' },
        { title: 'FAQs', link: 'faqs' },
        { title: 'Testimonials', link: 'testimonials' },
        { title: 'Contact', link: 'contact' },
    ]
    return (
        <Section>
            <footer className="max-w-[90rem] mx-auto pb-28">
                <div className="flex justify-between mb-9 items-center py-9 px-12 rounded-4xl bg-gray-50">
                    <Headline>{headline}</Headline>
                    <Button variant='secondary' size='md' className='!py-6 !font-medium'
                        endIcon={<img src={ButtonIcon} className='w-4 h-4' />}
                    >{ctaContent}</Button>
                </div>
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <img src={BrandPng} alt="" className='rounded-4xl' />
                    <div className="py-9 px-12 rounded-4xl bg-gray-50">
                        <Typography className='mb-8 font-semibold !font-nueue' variant='2xl' >{content}</Typography>
                        <ul className="flex flex-wrap gap-x-11 gap-y-3 list-none max-w-[22rem]">
                            {links.map(li => <Typography key={li.link} className='font-normal' >{li.title}</Typography>)}
                        </ul>
                    </div>
                </div>
                <Headline className={'text-center text-[12rem] font-black ' + headlineClassName} >BORN21 MEDIA</Headline>
            </footer>


        </Section>
    )
}

export default FooterSection