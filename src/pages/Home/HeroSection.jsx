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
import AnimatedList from '../../components/AnimatedList'

import Svg from '../../assets/images/Vector-2.png'
import { openCalendly } from '../../utils/urls'



const HeroSection = () => {

    const data = [
        { count: 15, title: 'Niches' },
        { count: 50, title: 'Niches' },
        { count: 500, title: 'View Generated', unit: 'M' },
    ]

    const content = `Strategy to execution, we handle everything to scale your YouTube with data-driven content and proven results`

    return (
        <div className="relative overflow-hidden rounded-b-xl md:rounded-b-[5rem]">
            <Section id='hero-section'
                sectionClassName='bg-[#008CFF]'
                containerClassName='pt-34 md:pt-52 overflow-hidden relative md:px-32 ' >


                <div className="relative z-10">

                    <div className=" hero-content-wrapper mb-8 md:mb-24 !mx-auto text-white rounded-b-[5rem] text-center relative flex- flex-col items-center">
                        <div className="relative mb-6">


                            <div className="w-fit relative mx-auto">
                                <Headline variant='h1' className='leading-[0.7]' >MORE</Headline>
                                <div className="absolute z-10 md:top-[-4.5rem] right-[-4.5rem] top-[-2rem]  md:right-[-11.5rem] w-20 h-20 md:w-52 md:h-52 grid place-content-center">
                                    <div className="slow-spin absolute w-20 h-20 md:w-52 md:h-52 top-0 right-0">
                                        <img src={YTGraphic} className="w-20 h-20 md:w-52 md:h-52 relative" alt="" />
                                    </div>
                                    <div className="relative">
                                        <img src={YTPng} className="md:w-30 w-12 md:h-30 h-12" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* <Headline variant='h1' >GROWTH</Headline> */}
                            <TextLoop texts={['VIEWS', 'ENGAGEMENT', 'GROWTH',]} />
                            <p className='text-base md:text-4xl font-medium text-center max-w-[42rem] mx-auto mb-12' >We help brands create content that gets
                                recommended, shared, and remembered</p>
                        </div>
                        <Button
                            onClick={openCalendly}
                            endIcon={<img src={Svg} className='md:w-6 md:h-6 w-3 h-3 filter invert relative bottom-0.5 left-1.5' />} variant='primary' size='lg' className='md:!px-24 shadow-[0px_2px_1px_1px_#00000066] group mx-auto overflow-hidden relative hover:!bg-primary'>
                            <div className="absolute left-[-300%] bottom-[-50%] scale-110  group-hover:bottom-0 group-hover:left-[0%] top-0 w-[300%] opacity-100 group-hover:opacity-100 group-hover:w-[300%] h-full"
                                style={{
                                    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.253), rgba(0, 0, 0, 0.253) 40%, transparent 40%, transparent 50%, rgba(0, 0, 0, 0.253) 50%, rgba(0, 0, 0, 0.253) 60%, transparent 60%, transparent 78%, transparent 78%, transparent 100%)',
                                    transitionDuration: '600ms',

                                }}
                            ></div>
                            <span className='relative z-10'>
                                Schedule a Call
                            </span>
                        </Button>


                    </div>
                    {/* <div className="pb-16 flex flex-col md:flex-row gap-6 justify-between items-center text-white">

                        <div className="flex grid grid-cols-3 justify-between items-center gap-8 max-w-2xl">
                            {data.map(d =>
                                <div className="flex flex-col gap-1 w-28 md:w-40 ">

                                    <Headline><AnimatedList from={1} to={d.count} />{d.unit}+</Headline>
                                    <Typography>{d.title}</Typography>
                                </div>
                            )}
                        </div>
                        <p className='font-light max-w-[28rem] text-base md:text-xl' >{content}</p>
                    </div> */}
                </div>

            </Section>
            <Wave fill='#069FFF'
                paused={false}
                className='absolute left-0 bottom-[-5rem]  md:bottom-[-20rem] h-1/2 rotate-[-10deg]  scale-[2] md:scale-[2.7]'

                options={{
                    amplitude: 20,
                    speed: 0.2,
                    points: 6
                }}
            />

        </div>

    )
}

export default HeroSection