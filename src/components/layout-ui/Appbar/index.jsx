import React from 'react'
import Section from '../Section'

import BrandPng from '../../../assets/images/brand.png'
import VectorPng from '../../../assets/images/vector.png'

import Typography from '../../common/Typography'
import useHeroVisibility from '../../../hooks/useHeroVisibility'

const Appbar = () => {
    const isHeroVisible = useHeroVisibility()
    return (
        <Section containerClassName='!py-16 !px-32' sectionClassName='fixed top-0 left-0 z-50' >
            <div className="header-wrapper flex items-center justify-between transition-all"
            >

                <div className={`brand-wrapper flex gap-1 text-${isHeroVisible ? 'white' : "black"}`}>
                    <img src={BrandPng} className='w-28' alt="born-21" />
                    <span className="brand-name flex flex-col font-nohemi">
                        <span>
                            BORN
                        </span>
                        <span>
                            TWENTY
                        </span>
                        <span>
                            ONE
                        </span>
                    </span>
                </div>

                <nav className={`nav-wrapper flex gap-4 items-center text-${isHeroVisible ? 'white' : "black"}`}>
                    <Typography variant='4xl' className={`font-medium cursor-pointer !pr-4 border-r border-r-${isHeroVisible ? 'white' : "black"}`} >Menu</Typography>
                    <Typography
                        variant='4xl'
                        className='group font-medium  cursor-pointer  inline-flex gap-3 items-center'
                    >
                        <span className="relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 group-hover:before:w-full">
                            Start a project
                        </span>

                        <img src={VectorPng} className='w-5 h-5 transition-transform duration-300 group-hover:rotate-45' />
                    </Typography>


                </nav>
            </div>

        </Section>
    )
}

export default Appbar