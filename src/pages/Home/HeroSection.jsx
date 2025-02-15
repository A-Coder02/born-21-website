import React from 'react'
import Section from '../../components/layout-ui/Section'
import Headline from '../../components/common/Headline'
import YoutubeGraphic from '../../assets/svgs/YoutubeGraphic'
import YTGraphic from '../../assets/images/youtube-graphic.png'
import Button from '../../components/common/Button'
import Typography from '../../components/common/Typography'
import Wave from 'react-wavify'



const HeroSection = () => {

    const data = [
        { count: 15, title: 'Niches' },
        { count: 50, title: 'Niches' },
        { count: '500M', title: 'View Generated' },
    ]

    const content = `Strategy to execution, we handle everything to scale your YouTube with data-driven content and proven results`

    return (
        <Section sectionClassName='' containerClassName='!pt-52 overflow-hidden relative !px-32 bg-[#008CFF] rounded-b-[5rem]' >

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

                <div className=" hero-content-wrapper mb-24 w-fit !mx-auto text-white rounded-b-[5rem] text-center relative flex flex-col items-center">
                    <div className="relative mb-6">
                        <div className="slow-spin absolute top-[-3.5rem] right-[-2.5rem]">
                            <img src={YTGraphic} className="w-48 h-48" alt="" />
                        </div>

                        <Headline variant='h1' className='leading-[0.7]' >MORE</Headline>
                        <Headline variant='h1' >GROWTH</Headline>
                    </div>
                    <Button variant='primary' size='lg' >Start your journey</Button>
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