import React from 'react'
import Typography from '../../components/common/Typography'
import Headline from '../../components/common/Headline'
import TextField from '../../components/form-ui/TextField'
import Button from '../../components/common/Button'
import Section from '../../components/layout-ui/Section'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const ServiceHeroSection = ({ card }) => {
    return (
        <Section>
            <div className="flex gap-8 wrapper py-44 px-32">
                <div className="wrapper-item flex-1 text-white">
                    <Chip card={card} />
                    <Headline variant='h3' className='mb-4' >{card.headline}</Headline>
                    <Typography variant='3xl' className='mb-9'>{card.leadContent}</Typography>
                    <Typography variant='3xl' className={`font-medium mb-8 text-${card.theme.primary.light}`} >Key Takeaways</Typography>
                    <ul className='list-none mb-9' >
                        {card.list.map((li, index) => <li className='flex gap-4 mb-9' >
                            <Typography component={'span'} variant='lg' className={`font-medium w-10 h-10 aspect-square rounded-full grid place-content-center bg-${card.theme.primary.DEFAULT} text-${card.theme.batchTextColor}`}>
                                {index + 1}
                            </Typography>

                            <Typography variant='xl'>
                                <span className='font-medium'>
                                    {li.title}:&nbsp;
                                </span>
                                <span>{li.lead}</span>
                            </Typography>
                        </li>)}
                    </ul>
                </div>
                <MyForm />
            </div>
        </Section>
    )
}

export default ServiceHeroSection;

const Chip = ({ card }) => <div className={`w-fit rounded-4xl px-6 py-3 text-center bg-${card.theme.primary.light} mb-10`}
>
    <Typography variant='base' className={`font-medium text-${card.theme.batchTextColor}`}
    >
        {card.small}
    </Typography>
</div>;

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    company_name: Yup.string().required('Company/Channel Name is required'),
    youtube_channel_link: Yup.string().required('YouTube Channel Link is required'),
    youtube_growth_challenge: Yup.string().required('This field is required'),
});


const MyForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                company_name: '',
                youtube_channel_link: '',
                youtube_growth_challenge: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log('Form Data:', values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="flex-1 bg-white rounded-4xl px-10 py-16">
                    <header>
                        <Typography variant='3xl' className='font-medium text-center mb-8'>
                            Get the inside scoop
                        </Typography>
                    </header>
                    <main className='flex flex-col gap-8 mb-15'>
                        <div>
                            <Field as={TextField} label='Full Name' name='name' placeholder='Enter Name' required />
                            {<Typography variant='base' className='text-red-400 mt-2 pl-8' ><ErrorMessage name="name" component="div" className="mt-1" /></Typography>}
                        </div>
                        <div>
                            <Field as={TextField} label='Email' name='email' placeholder='Enter Business Email' required />
                            {<Typography variant='base' className='text-red-400 mt-2 pl-8' ><ErrorMessage name="email" component="div" className="mt-1" /></Typography>}
                        </div>
                        <div>
                            <Field as={TextField} label='Company/Channel Name' name='company_name' placeholder='Enter Name' required />
                            {<Typography variant='base' className='text-red-400 mt-2 pl-8' ><ErrorMessage name="company_name" component="div" className="mt-1" /></Typography>}
                        </div>
                        <div>
                            <Field as={TextField} label='YouTube Channel Link' name='youtube_channel_link' placeholder="Enter YouTube Channel Link. Write N/A if Channel doesn’t exist." required />
                            {<Typography variant='base' className='text-red-400 mt-2 pl-8' ><ErrorMessage name="youtube_channel_link" component="div" className="mt-1" /></Typography>}
                        </div>
                        <div>
                            <Field as={TextField} label='Biggest YouTube Growth Challenge?' name='youtube_growth_challenge' placeholder='Enter your biggest challenge' required />
                            {<Typography variant='base' className='text-red-400 mt-2 pl-8' ><ErrorMessage name="youtube_growth_challenge" component="div" className="mt-1" /></Typography>}
                        </div>
                    </main>
                    <footer>
                        <Button variant='primary' size='lg' type='submit' className='w-full' disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Download Case Study'}
                        </Button>
                    </footer>
                </Form>
            )}
        </Formik>
    );
};