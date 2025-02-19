import React from 'react'
import Typography from '../common/Typography'

const TextField = ({ label, placeholder, required = false }) => {
    return (
        <Typography component={'label'} variant='lg' className='w-full' >
            <span className='pl-8 block mb-2' >{label}
                {required && <span className='text-red-400' >*</span>}
            </span>
            <input
                required={required}
                type="text"
                className='w-full px-8 py-6 rounded-[3.125rem] border border-black'
                placeholder={placeholder}
            />
        </Typography>
    )
}

export default TextField