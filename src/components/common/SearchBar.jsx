function SearchBar({
  value = '',
  onChange,
  placeholder = 'Buscar productos...',
  className = '',
  ...props
}) {
  return (
    <div className={`search-bar ${className}`.trim()}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        className="input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
        {...props}
      />
    </div>
  )
}

export default SearchBar
