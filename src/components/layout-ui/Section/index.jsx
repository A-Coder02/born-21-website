import React from 'react'

/**
 * Reusable Section component that wraps content in a section element.
 * Provides optional class names for styling the section and its inner container.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.children=null] - The content to be rendered inside the section.
 * @param {string} [props.sectionClassName=''] - Additional CSS classes for the `<section>` element.
 * @param {string} [props.containerClassName=''] - Additional CSS classes for the inner container `<div>`.
 * @returns {JSX.Element} The Section component.
 */
const Section = ({ children = null, sectionClassName = '', containerClassName = '' }) => {
    return (
        <section className={`w-full ${sectionClassName}`} >
            <div className={`${containerClassName} !mx-auto max-w-[75rem]`} >
                {children}
            </div >
        </section >
    )
}

export default Section
