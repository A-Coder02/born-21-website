import React, { useState } from 'react'
import Section from '../../components/layout-ui/Section'
import Typography from '../../components/common/Typography'
import Headline from '../../components/common/Headline';

const TestimonialSection = () => {
    const small = 'Real Results, Real Raves';
    const headline = 'We could talk all day about YouTube growth, but we’d rather let our clients do the talking';

    const cardContent = [
        {
            id: 1,
            title: 'We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!',
            content: 'Our channel had been stuck for months, barely gaining traction despite regular uploads. After bringing in this team, everything changed—content structure, thumbnails, even the way we approached storytelling. Within a few months, we were consistently hitting six figures in views, and engagement shot through the roof!',
            client: {
                profile: '',
                name: "Client Name Here",
                company: "Company Name"
            }
        },
        {
            id: 2,
            title: 'We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!',
            content: 'Our channel had been stuck for months, barely gaining traction despite regular uploads. After bringing in this team, everything changed—content structure, thumbnails, even the way we approached storytelling. Within a few months, we were consistently hitting six figures in views, and engagement shot through the roof!',
            client: {
                profile: '',
                name: "Client Name Here",
                company: "Company Name"
            }
        },
        {
            id: 3,
            title: 'We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!',
            content: 'Our channel had been stuck for months, barely gaining traction despite regular uploads. After bringing in this team, everything changed—content structure, thumbnails, even the way we approached storytelling. Within a few months, we were consistently hitting six figures in views, and engagement shot through the roof!',
            client: {
                profile: '',
                name: "Client Name Here",
                company: "Company Name"
            }
        },
        {
            id: 4,
            title: 'We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!',
            content: 'Our channel had been stuck for months, barely gaining traction despite regular uploads. After bringing in this team, everything changed—content structure, thumbnails, even the way we approached storytelling. Within a few months, we were consistently hitting six figures in views, and engagement shot through the roof!',
            client: {
                profile: '',
                name: "Client Name Here",
                company: "Company Name"
            }
        },
        {
            id: 5,
            title: 'We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!',
            content: 'Our channel had been stuck for months, barely gaining traction despite regular uploads. After bringing in this team, everything changed—content structure, thumbnails, even the way we approached storytelling. Within a few months, we were consistently hitting six figures in views, and engagement shot through the roof!',
            client: {
                profile: '',
                name: "Client Name Here",
                company: "Company Name"
            }
        }
    ];

    const [index, setIndex] = useState(0);
    const length = 3

    return (
        <Section>
            <div className="bg-warning-dark px-4 pt-28 pb-16 rounded-[3.2rem] mb-28 overflow-x-hidden">
                <div className="max-w-[56rem] mx-auto">
                    <Typography variant='lg' className='text-white mb-8 bg-warning py-3 px-12 text-center rounded-4xl max-w-fit mx-auto uppercase font-medium' >{small}</Typography>
                    <Headline className='text-warning-light text-center mb-16' >{headline}</Headline>
                    <div className="relative flex gap-9 overflow-x-hidden- mb-20">
                        {cardContent.map((card, _index) =>
                            <TestimonialCard style={{
                                left: `-${(_index || 1) * 384 * index}px`,
                                left: `-${index * 384}px`,
                                position: 'relative',
                                transition: '1000ms',
                            }}
                                className={`relative`} key={card.id} card={card} />
                        )}
                    </div>
                    <CarouselSlider length={length} index={index} onClick={setIndex} />
                </div>
            </div>
        </Section>
    )
}

export default TestimonialSection;

const TestimonialCard = ({ card, className = '', style = null }) => {

    console.log({ style })

    return <article style={style} className={`bg-warning-light py-5 px-8 rounded-4xl flex-[0_0_24rem] min-h-96 ${className}`}>
        <Typography component={'div'} className='h-20 text-[5rem] font-black text-warning' >“</Typography>
        <Typography className='font-medium text-warning mb-3'>{card.title}</Typography>
        <Typography variant='sm' className='mb-4'>{card.content}</Typography>

        <div className="flex gap-3 items-center">
            <div className='w-12 h-12 rounded-full bg-warning' style={{
                backgroundImage: `url(${card.client.profile})`
            }} />
            <div className="">
                <Typography variant='sm' className='font-medium' >{card.client.name}</Typography>
                <Typography className='text-[0.625rem]' >{card.client.company}</Typography>
            </div>
        </div>
    </article>
}

const CarouselSlider = ({ index = 0, onClick }) =>
    <div className="flex gap-3 mb-5 justify-center">
        {new Array(3).fill(0).map((pt, ptIndex) =>
            <div
                onClick={() => onClick(ptIndex)}
                className={`w-${index == ptIndex ? '12' : '6'} h-6 cursor-pointer rounded-full bg-${index === ptIndex ? 'warning' : 'warning-light'} transition-all`}></div>
        )}
    </div>
