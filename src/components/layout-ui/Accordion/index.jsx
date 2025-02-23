import React from 'react'

import AccordionIcon from '../../../assets/images/accordion-icon.png'
import Typography from '../../common/Typography'

const Accordion = ({ title, content, expand = false, onClick = () => { } }) => {
    return (
        <div className='w-full mb-6' >
            <button className='relative z-10 bg-[#F9F9F9] active:bg-slate-300 transition-colors rounded-xl md:rounded-3xl flex items-center md:py-7 md:px-12 py-4 px-7 cursor-pointer gap-4 w-full' onClick={onClick} >
                <span component={'span'} className='flex-1 text-base md:text-xl  font-medium text-left' >{title}</span>
                <img src={AccordionIcon} alt="" className='w-6 h-6 transition-all' style={{
                    transform: `rotate(${expand ? 180 : 0}deg)`
                }} />
            </button>
            <div className={`w-full bg-gray-200 rounded-b-xl md:rounded-b-3xl overflow-hidden accordion-item relative top-[-0.5rem] md:top-[-1rem] ${!expand ? 'accordion-item' : 'accordion-item-active'} `}>
                <p className='flex-1 t-xl font-medium text-left text-slate-800 md:py-7 md:px-12 py-4 px-7 pt-6 md:pt-10'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Accordion