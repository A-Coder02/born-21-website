import React from 'react'

import AccordionIcon from '../../../assets/images/accordion-icon.png'
import Typography from '../../common/Typography'

const Accordion = ({ title, content, expand = false, onClick = () => { } }) => {
    return (
        <div className='w-full mb-6' >
            <button className='bg-[#F9F9F9] active:bg-slate-300 transition-colors rounded-tl-3xl rounded-tr-4xl  flex items-center py-7 px-12 cursor-pointer gap-4 w-full' onClick={onClick} >
                <Typography component={'span'} className='flex-1 text-xl font-medium text-left' >{title}</Typography>
                <img src={AccordionIcon} alt="" className='w-6 h-6' />
            </button>
            <div className={`w-full bg-gray-200 rounded-bl-4xl rounded-br-4xl overflow-hidden accordion-item ${!expand ? 'accordion-item' : 'accordion-item-active'} `}>
                <Typography className='flex-1 text-xl font-medium text-left text-slate-800 py-7 px-12'>
                    {content}
                </Typography>
            </div>
        </div>
    )
}

export default Accordion