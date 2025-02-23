import React from "react";
import { useField, ErrorMessage } from "formik";

const TextField = ({ label, name, placeholder }) => {
    const [field, meta] = useField(name);
    const error = meta.touched && meta.error;

    return (
        <div className="w-full">
            <label htmlFor={name} className="w-full text-sm md:text-lg">
                <span className="pl-4 md:pl-8 block mb-2">{label}</span>
                <input
                    id={name}
                    {...field} // Connects to Formik
                    className={`text-sm md:text-base w-full px-4 py-3 md:px-8 md:py-6 rounded-[3.125rem] border ${error ? "border-red-500" : "border-black"
                        }`}
                    placeholder={placeholder}
                />
            </label>
            {error && (
                <p variant="base" className="text-sm md:text-base text-red-400 mt-2 pl-8">
                    <ErrorMessage name={name} component="div" className="mt-1" />
                </p>
            )}
        </div>
    );
};

export default TextField;
