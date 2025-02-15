import { useState } from 'react';

export default function TextField(props) {
  const label = props.label || null;
  const type = props.type || 'text';
  const value = props.value || null;
  const onChange = props.onChange;
  const placeholder = props.placeholder || null;
  const required = props.required || false;
  // const errorMessage = props.errorMessage || null;

  const [touched, setTouched] = useState(false);

  return (
    <div>
      <div className="flex mb-1.5 items-center justify-between">
        {label && <label className="text-sm text-marine-blue ">{label}</label>}
        {touched && required && !value && (
          <p className="text-sm font-semibold text-strawberry-red"> This field is required </p>
        )}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onBlur={() => setTouched(true)}
        className={`border border-light-gray w-full h-12 px-2.5 rounded-lg font-medium ${touched && required && !value && 'border-strawberry-red'}`}
      />
    </div>
  );
}
