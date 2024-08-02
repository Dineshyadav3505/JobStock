import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    divClass="w-full",
    label,
    labelclass,
    type = 'text',
    className = '',
    placeholder,
    onChange,
    ...props
}, ref) {
    // Correctly call useId to generate a unique ID
    const id = useId();

    return (
        <div className={`${divClass} `}>
            {label && (
                <label htmlFor={id} className={`inline-block mb-1 pl-1 ${labelclass}`}>
                    {label}
                </label>
            )}
            <input
                id={id} // Assign the generated ID to the input
                type={type}
                className={className}
                placeholder={placeholder}
                ref={ref}
                onChange={onChange}
                {...props}
            />
        </div>
    );
});

export default Input;