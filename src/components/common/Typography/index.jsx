import React from 'react'

/**
 * Typography component for rendering text with Tailwind variants.
 * 
 * @param {Object} props - Component properties.
 * @param {keyof JSX.IntrinsicElements} [props.component="p"] - The HTML tag to render (e.g., 'p', 'h1', 'span').
 * @param {'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'} [props.variant="base"] - Tailwind text size variant.
 * @param {string} [props.className=""] - Additional CSS classes for styling.
 * @param {React.ReactNode} [props.children=null] - Content inside the component.
 * @returns {JSX.Element} A React component with the specified typography styling.
 */
const Typography = ({ component: Component = 'p', variant = 'base', children = null, className = "", style = {} }) => {

    const _variant = getVariant(variant);
    const _className = `${_variant} ${className}`;

    return <Component className={_className} style={style} >{children}</Component>;
};

export default Typography;

function getVariant(variant = 'base') {
    switch (variant) {
        case 'base': return 't-base';
        case 'sm': return 't-sm';
        case 'lg': return 't-lg';
        case 'xl': return 't-xl';
        case '2xl': return 't-2xl';
        case '3xl': return 't-3xl';
        case '4xl': return 't-4xl';
        case '5xl': return 't-5xl';
        default: return 't-base';
    }
}