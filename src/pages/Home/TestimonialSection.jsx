import React, { useEffect, useState } from 'react'
import Section from '../../components/layout-ui/Section'
import Typography from '../../components/common/Typography'
import Headline from '../../components/common/Headline';
import testimonials from '../../data/testimonials';
import Carousel from '../../components/layout-ui/carousel/Carousel';
import { Chip } from '../Services/ServiceHeroSection';
// import useDragDirection from '../../hooks/useDragDirection';

const TestimonialSection = ({
    theme = {
        bgClassName: 'bg-warning-dark ',
        headlineClassName: 'text-warning-light ',
        chipClassName: 'text-white bg-warning',
        cardClassName: {
            container: 'bg-warning-light',
            title: 'text-warning'
        },
        sliderClassName: {
            active: 'bg-warning',
            default: 'bg-warning-light'
        }
    },
    headline = <><div className="">
        We drive Growth
    </div>
        <div className="">Our clients drive the conversation</div></>
}) => {
    const [index, setIndex] = useState(0);
    const length = 3;

    const { small, list } = testimonials


    return (
        <Section containerClassName='!px-0 md:!px-4'>
            <div className="bg-green-dark bg-green-dark-2"></div>
            <div
                style={{
                    backgroundColor: theme.bgClassName
                }}
                className={`px-4 md:px-0 md:pt-28 pt-16 pb-12 md:pb-12 md:rounded-[3.2rem] rounded-3xl md:mb-14 md:my-12  overflow-x-hidden`}>
                <div className="max-w-[56rem] mx-auto" id='carousel'>
                    <div style={{
                        backgroundColor: theme.chipClassName.background,
                        color: theme.chipClassName.text,
                        // chipClassName: {
                        //     background: '#FFE500', // bg-primary
                        //     text: '#2B2B2B' // text-black
                        // },
                    }} className={`text-sm md:text-lg mb-8 py-3 px-6 md:px-12 text-center rounded-4xl max-w-fit mx-auto uppercase font-medium`} >{small}</div>
                    <h4
                        style={{
                            color: theme.headlineClassName
                        }}
                        className={`text-2xl px-4 md:px-0 md:text-5xl text-center !font-bold mb-12 md:mb-16`} >{headline}</h4>
                </div>

                <Carousel theme={theme} list={list} />
                {/* <div className="relative flex gap-9 overflow-x-hidden- mb-20">
                    {list.map((card, _index) =>
                        <TestimonialCard theme={theme} style={{
                            // left: `-${(_index || 1) * 384 * index}px`,
                            left: `-${index * 420 / 16}rem`,
                            position: 'relative',
                        }}
                            className={`relative`} key={card.id} card={card} />
                    )}
                </div> */}
                {/* <CarouselSlider sliderClassName={theme.sliderClassName} length={length} index={index} onClick={setIndex} /> */}
            </div>
        </Section>
    )
}

export default TestimonialSection;

const TestimonialCard = ({ theme = {}, card, className = '', style = null }) => {
    return <article style={style} className={`${theme.cardClassName.container} py-5 px-8 rounded-4xl flex-[0_0_24rem] min-h-96 ${className} transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1.25,0.5,1)]`}>
        <div className={'h-20 !text-[5rem] font-black ' + theme.cardClassName.title} >“</div>
        <Typography className={'font-medium mb-3 ' + theme.cardClassName.title}>{card.title}</Typography>
        <Typography variant='sm' className='mb-4 !leading-4'>{card.content}</Typography>

        <div className="flex gap-3 items-center">
            {/* <div className='w-12 h-12 rounded-full bg-warning' style={{
                backgroundImage: `url(${card.client.profile})`
            }} /> */}
            <div className="">
                <Typography variant='sm' className='font-medium' >{card.client.name}</Typography>
                <Typography className='text-[0.625rem]' >{card.client.company}</Typography>
            </div>
        </div>
    </article>
}

const CarouselSlider = ({ sliderClassName = {
    active: 'bg-warning',
    default: 'bg-warning-light'
}, index = 0, onClick }) =>
    <div className="flex gap-3 mb-5 justify-center">
        {new Array(3).fill(0).map((pt, ptIndex) =>
            <div
                key={ptIndex}
                onClick={() => onClick(ptIndex)}
                className={`w-${index == ptIndex ? '12' : '6'} h-6 cursor-pointer rounded-full ${index === ptIndex ? sliderClassName.active : sliderClassName.default} transition-all`}></div>
        )}
    </div>
