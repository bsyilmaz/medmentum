const Textarea = ({ 
  label, 
  error, 
  className = '',
  rows = 4,
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-lg border-2 border-gray-200
          focus:border-primary-500 focus:ring-2 focus:ring-primary-200
          transition-all duration-200 outline-none resize-none
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default Textarea

