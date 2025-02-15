import React from 'react'

const Section = ({ children = null, sectionClassName = '', containerClassName = '' }) => {
    return (
        <section className={`${sectionClassName}`} >
            <div className={`${containerClassName} mx-auto max-w-[75rem]`} >
                {children}
            </div >
        </section >
    )
}

export default Section