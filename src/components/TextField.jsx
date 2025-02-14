export default function TextField(props) {
  const label = props.label || null;
  const placeholder = props.placeholder || null;
  const required = props.required || false;
  const errorMessage = props.errorMessage || null;

  return (
    <div>
      <div className="flex mb-1.5 items-center justify-between">
        {label && <label className="text-sm text-marine-blue ">{label}</label>}
        {required && (
          <p className="text-sm font-semibold text-strawberry-red"> This field is required </p>
        )}
      </div>
      <input
        className="border border-gray-200 w-full h-12 px-2.5 rounded-lg font-medium"
        placeholder={placeholder}
      />
    </div>
  );
}
