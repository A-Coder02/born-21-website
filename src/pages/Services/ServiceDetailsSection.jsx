import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Typography from '../../components/common/Typography'
import Button from '../../components/common/Button'

import Svg from '../../assets/svgs/personal-care/pc-1.svg'

const ServiceDetailsSection = ({ details, theme = {} }) => {

    const subHeadline = 'Want These Results for Your Brand?';
    const subLead = 'At Born21 Media, we help brands scale their YouTube presence with tailored strategies that drive real growth—no fluff, just results.'
    const subButtonContent = 'Download Case Study';

    const _headline = details.headline.split(" ")
    console.log({ _headline, theme })
    return (
        <Section>
            <div className="mx-auto max-w-[90rem] mb-8 md:mb-24">
                <h3 variant='h3' className='md:max-w-[60rem] mx-auto md:text-6xl text-4xl font-extrabold md:mb-14 mb-9  md:text-center text-white flex flex-wrap gap-4 justify-center text-left' >{details.headline}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-9 gap-4 list-none">
                    {details.list.map((card, index) => <ServiceDetailCard key={index} index={index} card={card} />)}
                </ul>
            </div>
            <div className="mx-auto max-w-[70rem] flex flex-col gap-6 text-white text-center mb-8 md:mb-24">
                <Headline>{subHeadline}</Headline>
                <Typography variant='3xl' className='mb-6'>{subLead}</Typography>
                <Button className='w-fit mx-auto' size='lg' >{subButtonContent}</Button>
            </div>

        </Section>
    )
}

export default ServiceDetailsSection;

const ServiceDetailCard = ({ card, index }) =>
    <li className={`rounded-3xl p-7 md:p-12 flex flex-col gap-7 ${cardTheme[index].bgColor} ${cardTheme[index].textColor}`}>
        {/* {Svg} */}
        {console.log({ p: card.icon })}
        <img src={card.icon} className=' h-10 md:h-20 object-contain object-left' alt="" />
        <div className="">
            {card.title && <h5 variant='h5' className='!font-bold md:text-6xl text-4xl '>{card.title}</h5>}

            {card.headline && <h3 variant='h3' className='!font-bold md:text-8xl text-5xl'>{card.headline}</h3>}
            {card.small && <p variant='5xl' className='!font-bold md:text-3xl text-xl'>{card.small}</p>}
        </div>
        <p variant='2xl' className='text-black text-sm md:text-3xl' >{card.lead}</p>
    </li>

const cardTheme = [
    {
        bgColor: 'bg-green-light',
        textColor: 'text-green-dark-2'
    },
    {
        bgColor: 'bg-warning-light',
        textColor: 'text-warning'
    },
    {
        bgColor: 'bg-pink-light',
        textColor: 'text-pink'
    },
    {
        bgColor: 'bg-blue-light',
        textColor: 'text-blue'
    },
]