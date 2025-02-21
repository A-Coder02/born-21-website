import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import Typography from '../../components/common/Typography'
import Button from '../../components/common/Button'

const ServiceDetailsSection = ({ details, theme = {} }) => {

    const subHeadline = 'Want These Results for Your Brand?';
    const subLead = 'At Born21 Media, we help brands scale their YouTube presence with tailored strategies that drive real growth—no fluff, just results.'
    const subButtonContent = 'Download Case Study';

    const _headline = details.headline.split(" ")
    console.log({ _headline, theme })
    return (
        <Section>
            <div className="mx-auto max-w-[90rem] mb-24">
                {/* <Headline variant='h3' className='mb-28 text-center text-white' >{details.headline.replace(details.headlineHighlightSmall, <span className='bg-black'>{details.headlineHighlightSmall}</span>)}</Headline> */}
                <Headline variant='h3' className='mb-28 text-center text-white flex flex-wrap gap-4 justify-center' >{_headline.map(h => details.headlineHighlightSmall.includes(h) ? <span className={``} >{h}</span> : <span>{h}</span>)}</Headline>
                <ul className="grid grid-cols-2 gap-9 list-none">
                    {details.list.map((card, index) => <ServiceDetailCard key={index} index={index} card={card} />)}
                </ul>
            </div>
            <div className="mx-auto max-w-[70rem] flex flex-col gap-6 text-white text-center mb-24">
                <Headline>{subHeadline}</Headline>
                <Typography variant='3xl' className='mb-6'>{subLead}</Typography>
                <Button className='w-fit mx-auto' size='lg' >{subButtonContent}</Button>
            </div>

        </Section>
    )
}

export default ServiceDetailsSection;

const ServiceDetailCard = ({ card, index }) =>
    <li className={`rounded-3xl py-12 px-12 flex flex-col gap-7 ${cardTheme[index].bgColor} ${cardTheme[index].textColor}`}>
        <img src={card.icon} className='h-20 object-contain object-left' alt="" />
        <div className="">
            {card.title && <Headline variant='h5' className='!font-bold !text-6xl'>{card.title}</Headline>}
            {card.headline && <Headline variant='h3' className='!font-bold'>{card.headline}</Headline>}
            {card.small && <Typography variant='5xl' className='!font-bold'>{card.small}</Typography>}
        </div>
        <Typography variant='2xl' className='text-black' >{card.lead}</Typography>
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