import React from 'react'
import Section from '../components/layout-ui/Section'
import Headline from '../components/common/Headline'
import Typography from '../components/common/Typography'
import Button from '../components/common/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Section>
            <div className="pt-32 text-center min-h-screen flex flex-col justify-center items-center">
                <Headline variant='h3'>Oops! Lost in the Algorithm?</Headline>
                <Typography variant='3xl' className='mb-16 max-w-4xl'>
                    This page doesn’t exist—kind of like a video with zero views! 📉
                    But don’t worry, let’s get you back on track. 🚀
                </Typography>
                <Button variant='primary' size='md' onClick={() => navigate('/')}>Back to Home</Button>
            </div>
        </Section>
    )
}

export default NotFound
