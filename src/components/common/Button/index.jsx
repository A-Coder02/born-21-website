import React from 'react';

/**
 * Button component with Tailwind variants.
 * 
 * @param {Object} props - Component properties.
 * @param {'primary' | 'secondary'} [props.variant="primary"] - Button style variant.
 * @param {'lg' | 'md' | 'base'} [props.size="base"] - Button size.
 * @param {'button' | 'submit'} [props.type="button"] - Button type.
 * @param {boolean} [props.rounded=true] - Whether the button is rounded.
 * @param {string} [props.className=""] - Additional CSS classes for styling.
 * @param {React.ReactNode} [props.children=null] - Button content.
 * @param {React.ReactNode} [props.endIcon=null] - Icon to display at the end of the button.
 * @returns {JSX.Element} A styled button component.
 */
const Button = ({
    variant = 'primary',
    size = 'base',
    rounded = true,
    className = "",
    children = null,
    endIcon = null,
    type = 'button',
    onClick = () => { }
}) => {
    const _variant = getVariant(variant);
    const _size = getSize(size);
    const _rounded = rounded ? 'rounded-[5.625rem]' : 'rounded-[1rem]';
    const _className = `relative flex gap-2 text-center min-w-36 font-nueue font-semibold cursor-pointer transition-colors flex items-center justify-center gap-2 ${_variant} ${_size} ${_rounded} ${className}`;

    return (
        <button className={_className} type={type} onClick={onClick}>
            <span>
                {children}
            </span>
            {endIcon && <span className="flex items-center">{endIcon}</span>}
        </button>
    );
};

export default Button;

/**
 * Get variant classes based on type.
 */
function getVariant(variant = 'primary') {
    switch (variant) {
        case 'primary': return 'bg-primary text-black hover:bg-primary-light';
        case 'secondary': return 'bg-info-primary text-white hover:bg-blue-300';
        default: return 'bg-transparent text-info-dark hover:bg-slate-200';
    }
}

/**
 * Get size classes based on size.
 */
function getSize(size = 'base') {
    switch (size) {
        case 'lg': return 'text-2xl md:text-[2rem] py-5 px-8 md:px-18 md:py-6';
        case 'md': return 'text-base py-4 px-4 min-w-54 md:text-xl md:px-10 md:!py-5 shadow-md';
        // case 'md': return 't-lg !px-10 !py-4';
        // case 'base': return 't-lg px-3 py-1.5';
        default: return 't-lg px-3 py-1.5';
    }
}
