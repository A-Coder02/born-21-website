import React from 'react'

import AccordionIcon from '../../../assets/images/accordion-icon.png'
import Typography from '../../common/Typography'

const Accordion = ({ title, content, expand = false, onClick = () => { } }) => {
    return (
        <div>
            <button className='bg-[#F9F9F9] flex items-center' onClick={onClick} >
                <Typography component={'span'} className='flex-1 text-xl font-medium' >{title}</Typography>
                <img src={AccordionIcon} alt="" className='w-6 h-6' />
            </button>
            <div className="">
                <Typography>
                    {content}
                </Typography>
            </div>
        </div>
    )
}

export default Accordion