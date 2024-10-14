'use client';
import React from 'react';
import { Field } from 'formik';

// export interface InputFieldProps {
//   label?: string;
//   id?: string;
//   placeholder?: string;
//   name?: string;
//   type?: string;
// }

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  as?: string;
}

function InputField({ label, id, as, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        as={as}
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
}

export default InputField;
