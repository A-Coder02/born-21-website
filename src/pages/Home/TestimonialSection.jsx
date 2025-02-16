import React from 'react'
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
    ]

    return (
        <Section>
            <div className="bg-warning-dark px-4 pt-28 pb-16 rounded-[3.2rem] mb-28">

                <div className="max-w-[56rem] mx-auto">
                    <Typography variant='lg' className='text-white mb-8 bg-warning py-3 px-12 text-center rounded-4xl max-w-fit mx-auto uppercase font-medium' >{small}</Typography>
                    <Headline className='text-warning-light text-center mb-16' >{headline}</Headline>

                    <div className="flex gap-9 overflow-x-hidden mb-20">
                        {cardContent.map(card =>
                            <article className='bg-warning-light py-5 px-8 rounded-4xl flex-[0_0_24rem] min-h-96'>
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
                        )}
                    </div>
                    <div className="carousel-slider">

                    </div>
                    <div className="flex gap-3 mb-5 justify-center">
                        <div className={`w-6 h-6 rounded-full bg-warning-light`}></div>
                        <div className={`w-6 h-6 rounded-full bg-warning-light`}></div>
                        <div className={`w-6 h-6 rounded-full bg-warning-light`}></div>
                    </div>
                </div>

            </div>



        </Section>
    )
}

export default TestimonialSection