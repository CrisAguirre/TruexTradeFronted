function Button({ children, variant = 'primary', size, className = '', ...props }) {
  const clases = [
    'btn',
    `btn-${variant}`,
    size ? `btn-${size}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={clases} {...props}>
      {children}
    </button>
  )
}

export default Button
