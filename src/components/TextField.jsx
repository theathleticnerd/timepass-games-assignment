import { useState } from 'react';

export default function TextField(props) {
  const label = props.label || null;
  const type = props.type || 'text';
  const value = props.value || '';
  const onChange = props.onChange;
  const placeholder = props.placeholder || null;
  const required = props.required || false;
  const errorMessage = props.errorMessage || null;

  const [touched, setTouched] = useState(false);

  return (
    <div>
      <div className="flex mb-1.5 items-center justify-between">
        {label && <label className="text-sm text-marine-blue ">{label}</label>}
        {(errorMessage || (touched && required && !value)) && (
          <p className="lg:text-sm font-semibold text-strawberry-red text-right text-xs">
            {errorMessage || 'This field is required'}
          </p>
        )}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onBlur={() => setTouched(true)}
        className={`border border-light-gray text-marine-blue w-full h-10 lg:h-12 px-2.5 rounded-lg font-medium focus:border-purplish-blue hover:border-purplish-blue ${(errorMessage || (touched && required && !value)) && 'border-strawberry-red'}`}
      />
    </div>
  );
}
