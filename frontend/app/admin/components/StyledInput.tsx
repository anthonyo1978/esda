'use client';

import React, { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
}

interface StyledTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  helperText?: string;
}

type CombinedStyledInputProps = StyledInputProps | StyledTextareaProps;

function isInput(props: CombinedStyledInputProps): props is StyledInputProps {
  return !('rows' in props || 'cols' in props);
}

export default function StyledInput(props: CombinedStyledInputProps) {
  const { label, helperText, id, required, className, onFocus, onBlur, value, defaultValue, ...rest } = props;
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value !== undefined ? value !== '' : defaultValue !== undefined && defaultValue !== '';
  const showFloatingLabel = isFocused || hasValue;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e as any);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e as any);
  };

  const inputClasses = `block w-full px-3 py-2 text-gray-900 border-none focus:ring-0 focus:outline-none ${className || ''}`;
  
  const labelClasses = `absolute left-3 px-1 transition-all duration-200 ease-in-out pointer-events-none ${ 
    showFloatingLabel
      ? '-top-2 -translate-y-1/2 bg-white text-xs text-blue-600 font-medium'
      : 'top-1/2 -translate-y-1/2 text-gray-500'
  }`;

  return (
    <div className={`relative border rounded-md px-3 py-2 shadow-sm transition-all duration-200 ease-in-out ${ 
      isFocused ? 'border-blue-600 ring-1 ring-blue-600' : 'border-gray-300'
    }`}>
      <label
        htmlFor={id}
        className={labelClasses}
      >
        {label}{required && showFloatingLabel && ' *'}
      </label>
      {isInput(props) ? (
        <input
          id={id}
          required={required}
          className={`${inputClasses} ${!showFloatingLabel && 'placeholder-transparent'}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          defaultValue={defaultValue}
          placeholder={showFloatingLabel ? rest.placeholder : label}
          {...(rest as StyledInputProps)}
        />
      ) : (
        <textarea
          id={id}
          required={required}
          className={`${inputClasses} ${!showFloatingLabel && 'placeholder-transparent'}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          defaultValue={defaultValue}
          placeholder={showFloatingLabel ? rest.placeholder : label}
          {...(rest as StyledTextareaProps)}
        />
      )}
      {helperText && (
        <p className="mt-2 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
} 