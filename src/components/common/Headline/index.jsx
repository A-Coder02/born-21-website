import React from 'react';

/**
 * Headline component for rendering text with Tailwind variants.
 * 
 * @param {Object} props - Component properties.
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [props.variant="h5"] - Tailwind text size variant.
 * @param {string} [props.className=""] - Additional CSS classes for styling.
 * @param {React.ReactNode} [props.children=null] - Content inside the component.
 * @returns {JSX.Element} A React component with the specified Headline styling.
 */
const Headline = ({ variant = 'h5', children = null, className = "", style = {} }) => {

    const Component = getComponent(variant);
    const _variant = getVariant(variant);
    const _className = `font-nohemi ${_variant} ${className}`;

    return <Component className={_className} style={style}>{children}</Component>;
};

export default Headline;

/**
 * Maps variant to a corresponding HTML tag.
 * 
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} variant 
 * @returns {keyof JSX.IntrinsicElements} HTML tag
 */
function getComponent(variant) {
    switch (variant) {
        case 'h1': return 'h1';
        case 'h2': return 'h2';
        case 'h3': return 'h3';
        case 'h4': return 'h4';
        case 'h5': return 'h5';
        case 'h6': return 'h6';
        default: return 'h5';
    }
}

/**
 * Maps variant to Tailwind text styles.
 * 
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} variant 
 * @returns {string} Tailwind classes
 */
function getVariant(variant = 'h5') {
    switch (variant) {
        case 'h1': return 'text-h1 font-extrabold'; // 160px
        case 'h2': return 'text-h2 font-black'; // 152px
        case 'h3': return 'text-h3 font-semibold'; // 80px
        case 'h4': return 'text-h4 font-bold'; // 66px
        case 'h5': return 'text-h5 font-semibold'; // 48px
        case 'h6': return 'text-h6 font-semibold'; // 36px
        default: return 'text-h5 font-extrabold'; // 48px
    }
}
