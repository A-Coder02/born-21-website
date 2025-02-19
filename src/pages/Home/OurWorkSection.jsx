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
    const cardList = services

    return (
        <Section>
            <div className="max-w-[56rem] mx-auto mb-52">
                <div className="flex  justify-end mb-28">
                    <Typography variant='lg' className='max-w-[30rem]' >{content}</Typography>
                </div>
                <div className="flex flex-col gap-16 min-h-screen">
                    {cardList.map((card, index) =>
                        <div className="sticky top-28" key={card.id}>
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

        </Section>
    )
}

export default OurWorkSection;

const WorkSectionCard = ({
    theme, headline, small, lead,
}) => {
    const navigate = useNavigate()
    console.log({ navigate })
    return <article className={`rounded-[3.125rem] py-11 px-14 aspect-video flex flex-col gap-12 bg-${theme.bgColor}`}
        style={{
            // backgroundColor: secondaryColor
        }}
    >
        <div className="article-header flex justify-between items-center">
            <div className={`rounded-4xl px-6 py-3 text-center bg-${theme.primary.light}`}
                style={{
                    // backgroundColor: primaryColor
                }}
            >
                <Typography variant='base' className={`font-medium text-${theme.batchTextColor}`}
                    style={{
                        // color: batchTextColor
                    }}
                >
                    {small}
                </Typography>
            </div>

            <div className="flex gap-3">
                {new Array(3).fill().map(el => <div className={`w-6 h-6 rounded-full bg-${theme.primary.light}`} />)}

            </div>
        </div>
        <Headline variant='h4' className='text-white max-w-[35rem]' >{headline}</Headline>

        <div className="flex justify-between items-end mt-auto">
            <Typography variant='xl' className='max-w-[29rem] text-white'>
                {lead}
            </Typography>
            <div className="text-white flex items-center gap-2 cursor-pointer group" onClick={() => navigate(`/services/${small}`)} >
                <Typography variant='' className='' >Read Case Study</Typography>
                <img src={Vector2Png} alt="" className='w-3.5 relative left-0 group-hover:left-1 transition-all' />
            </div>

        </div>
    </article>
}