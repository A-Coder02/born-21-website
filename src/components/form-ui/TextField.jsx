import React from 'react'
import Typography from '../common/Typography'

const TextField = ({ name, label, placeholder, required = false }) => {
    return (
        <label htmlFor={name} className='w-full text-sm  md:text-lg' >
            <span className='pl-4 md:pl-8 block mb-2' >{label}
                {required && <span className='t-red-400' >*</span>}
            </span>
            <input
                id={name}
                name={name}
                // required={required}
                type="text"
                className='w-full px-4 py-3 t-base md:px-8 md:py-6 rounded-[3.125rem] border border-black'
                placeholder={placeholder}
            />
        </label>
    )
}

export default TextField