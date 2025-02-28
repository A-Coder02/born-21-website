import React from 'react'
import Section from '../../components/layout-ui/Section'
import Typography from '../../components/common/Typography'
import Headline from '../../components/common/Headline'
import Vector2Png from '../../assets/images/Vector-2.png'
import services from '../../data/services'
import { useNavigate, useNavigation } from 'react-router-dom'
const OurWorkSection = () => {

    const content = 'Our expertise spans consulting services and done-for-you solutions, enabling brands to create engaging content that resonates deeply with their audience. By building organic brand equity, we help reduce reliance on ads, boost credibility, and deliver long-term growth.'
    const cardContent = [
        {
            id: 1,
            headline: '363% more views in 90 days',
            small: 'Personal Care',
            lead: 'How we transformed a personal care brand’s YouTube channel',
            primaryColor: '#FFE500',
            primaryLightColor: '#FAFFC1',
            secondaryColor: '#442904',
            batchTextColor: '#442904'
        },
        {
            id: 2,
            headline: 'From Stagnation to Surge',
            small: 'Health Care',
            lead: 'Strategic backlog optimization revived a healthcare brand’s channel, driving exponential growth',
            primaryColor: '#1EBCFF',
            primaryLightColor: '#D6F5FF',
            secondaryColor: '#0E375D',
            batchTextColor: 'white',
        },
        {
            id: 3,
            headline: '937% Watch-Time Surge',
            small: 'Finance Case Study',
            lead: 'How we grew a niche finance channel from 571K to 3.2M views in just 4 months',
            primaryColor: '#0ABF8F',
            primaryLightColor: '#D0FBE8',
            secondaryColor: '#012D26',
            batchTextColor: 'white',

        },
    ]
    const cardList = services;

    const headline = 'When Brands Take YouTube Seriously'

    return (
        <Section id='results' containerClassName='!px-0' >
            <div className="bg-blue-light px-4 py-20 md:py-28 ">
                <div className="max-w-[60rem] mx-auto mb-24 md:mb-48 min-h-[90%]">

                    <div className="flex flex-col md:gap-16 gap-6">
                        <h3 className=' sticky top-28 text-center font-nohemi font-extrabold text-2xl md:text-5xl md:mb-16 mb-12' >{headline}</h3>

                        {cardList.map((card, index) =>
                            <div className="sticky top-52" key={card.id}>
                                <WorkSectionCard
                                    headline={card.headline}
                                    small={card.small}
                                    lead={card.leadContent}
                                    theme={card.theme}
                                // primaryColor={card.primaryColor}
                                // primaryLightColor={card.primaryLightColor}
                                // secondaryColor={card.secondaryColor}
                                // batchTextColor={card.batchTextColor}
                                />
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </Section>
    )
}

export default OurWorkSection;

const WorkSectionCard = ({
    theme, headline, small, lead,
}) => {
    const navigate = useNavigate()
    console.log({ navigate })
    return <article className={` rounded-3xl md:rounded-[3.125rem] md:py-10 md:px-14 py-7 px-5 flex flex-col -aspect-[16/12] md:aspect-auto gap-5 md:gap-12 bg-${theme.bgColor}`}
        style={{
            // backgroundColor: secondaryColor
        }}
    >
        <div className="article-header flex justify-between items-center">
            <div className={`rounded-4xl md:px-6 md:py-3 py-1 px-3 text-center bg-${theme.primary.light}`}
                style={{
                    // backgroundColor: primaryColor
                }}
            >
                <p className={`text-sm md:text-base font-medium text-${theme.batchTextColor}`}
                >
                    {small.split(' ').slice(0, small.split(' ').length - 2).join(' ')}
                </p>
            </div>

            <div className="flex gap-1 md:gap-3">
                {new Array(3).fill().map(el => <div className={`w-2 h-2 md:w-6 md:h-6 rounded-full bg-${theme.dotsColor}`} />)}
            </div>
        </div>
        <div className="">
            <h4 className='text-white mb-3.5 md:mb-7 max-w-[36rem] text-4xl font-semibold md:text-[4.15rem]' >{headline}</h4>

            <div className=" md:mb-4 flex justify-between flex-col md:flex-row gap-6 md:items-end mt-auto">
                <p variant='xl' className='text-base md:text-xl font-light md:max-w-[29rem] text-white tracking-widest md:tracking-normal'>
                    {lead}
                </p>
                <div className="text-white flex items-center gap-2 cursor-pointer group" onClick={() => navigate(`/services/${small}`)} >
                    <p variant='' className='text-sm md:text-base' >Read Case Study</p>
                    <img src={Vector2Png} alt="" className='w-3.5 relative left-0 group-hover:left-1 transition-all' />
                </div>
            </div>
        </div>

    </article>
}