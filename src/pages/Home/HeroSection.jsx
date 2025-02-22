import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import YoutubeGraphic from '../../assets/svgs/YoutubeGraphic'
import YTGraphic from '../../assets/images/youtube-graphic.png'
import YTPng from '../../assets/images/youtube.png'
import Button from '../../components/common/Button'
import Typography from '../../components/common/Typography'
import Wave from 'react-wavify'
import Youtube from '../../assets/svgs/YoutubeGraphic'
import TextLoop from '../../components/TextLoop'



const HeroSection = () => {

    const data = [
        { count: 15, title: 'Niches' },
        { count: 50, title: 'Niches' },
        { count: '500M', title: 'View Generated' },
    ]

    const content = `Strategy to execution, we handle everything to scale your YouTube with data-driven content and proven results`

    return (
        <Section id='hero-section' containerClassName='pt-52 overflow-hidden relative px-32 bg-[#008CFF] rounded-b-[5rem]' >

            <Wave fill='#069FFF'
                paused={false}
                className='absolute left-0 bottom-[-25rem] h-1/2 rotate-[-16deg] scale-[2.7]'

                options={{
                    amplitude: 20,
                    speed: 0.2,
                    points: 8
                }}
            />

            <div className="relative z-10">

                <div className=" hero-content-wrapper mb-8 md:mb-24 !mx-auto text-white rounded-b-[5rem] text-center relative flex- flex-col items-center">
                    <div className="relative mb-6">


                        <div className="w-fit relative mx-auto">
                            <Headline variant='h1' className='leading-[0.7]' >MORE</Headline>
                            <div className="absolute z-10 top-[-5.5rem]  right-[-11.5rem] w-52 h-52 grid place-content-center">
                                <div className="slow-spin absolute w-52 h-52w-52 top-0 right-0">
                                    <img src={YTGraphic} className="w-52 h-52 relative" alt="" />
                                </div>
                                <div className="relative">
                                    <img src={YTPng} className="w-32 h-32" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <Headline variant='h1' >GROWTH</Headline> */}
                        <TextLoop texts={['VIEWS', 'ENGAGEMENT', 'GROWTH',]} />
                        <p className='text-base md:text-3xl font-medium text-center max-w-4xl mx-auto' >We transform overlooked videos into viral hits and build organic content strategies that fuel long-term growth</p>
                    </div>
                    <Button variant='primary' size='lg' className='mx-auto' >Grow Your Channel</Button>
                </div>
                <div className="pb-16 flex justify-between items-center text-white">

                    <div className="flex justify-between items-center gap-16">
                        {data.map(d =>
                            <div className="flex flex-col gap-1 ">
                                <Headline >{d.count}+</Headline>
                                <Typography>{d.title}</Typography>
                            </div>
                        )}
                    </div>
                    <Typography variant='xl' className='font-medium max-w-[26rem]' >{content}</Typography>
                </div>
            </div>

        </Section>
    )
}

export default HeroSection