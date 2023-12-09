export default function Input({
  label,
  type,
  name,
  value,
  required = false,
  placeholder,
  onChange,
  onBlur,
  error,
}: {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: any) => void;
  onBlur?: () => void;
  error?: string;
}) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        <span className="block text-sm font-medium text-slate-700">
          {label}
        </span>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type={type}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span className="text-red-700">{error}</span>
      </label>
    </>
  );
}
