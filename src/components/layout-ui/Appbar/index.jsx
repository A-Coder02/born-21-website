import React from 'react'
import Section from '../Section'

import BrandPng from '../../../assets/images/brand.png'
import VectorIcon from '../../../assets/svgs/arrow-icon.svg'

import useScrollChangeAppBar from '../../../hooks/useScrollChangeAppBar'
import { useNavigate } from 'react-router-dom'

const Appbar = () => {
    // const isHeaderToggleStyles = useHeroVisibility();
    const isHeaderToggleStyles = !false
    // const isHeaderToggleStyles = useScrollChangeAppBar();
    const navigate = useNavigate();
    return (
        <Section containerClassName='!py-5 md:!py-8 md:!px-32' sectionClassName='fixed top-0 left-0 z-50' style={{
            // backgroundColor: !isHeaderToggleStyles ? 'white' : 'transparent',
            borderColor: !isHeaderToggleStyles ? 'black' : 'transparent',
            // borderBottomWidth: '1px',
            transition: '0.6s'
        }}  >
            <div className={"header-wrapper flex items-center justify-between transition-all "}
            >

                <div className={`brand-wrapper flex gap-2 items-center text-${isHeaderToggleStyles ? 'white' : "black"}`}>
                    <img src={BrandPng} onClick={() => navigate('/')} className='w-16 object-contain md:w-28 cursor-pointer' alt="born-21" />
                    <span className="brand-name flex flex-col font-nohemi !text-[0.55rem] md:!text-[1rem] md:text-base relative top-[1px]  md:leading-4.5">
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

                <nav className={`nav-wrapper flex gap-4 items-center text-${isHeaderToggleStyles ? 'white' : "black"}`}>
                    {/* <Typography variant='4xl' className={`font-medium cursor-pointer !pr-4 border-r border-r-${isHeaderToggleStyles ? 'white' : "black"}`} >Menu</Typography> */}
                    <div
                        // variant='4xl'
                        className='text-base md:text-3xl group font-medium  cursor-pointer  inline-flex gap-3 items-center'
                    >
                        <span className="relative pb-1 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 group-hover:before:w-full">
                            Work With Us
                        </span>

                        <span className={`transition ${isHeaderToggleStyles ? 'invert-0' : 'invert'}`} >
                            <img src={VectorIcon} className='w-3 h-3 md:w-5 md:h-5 transition-all duration-300 group-hover:rotate-45' />
                        </span>
                    </div>


                </nav>
            </div>
            <div className="invert invert-0"></div>
        </Section>
    )
}

export default Appbar