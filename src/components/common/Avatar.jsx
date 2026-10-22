function Avatar({ src, nombre = '', alt = '', size = 40, className = '' }) {
  const inicial = nombre.trim().charAt(0).toUpperCase() || '?'

  return (
    <span
      className={`avatar ${className}`.trim()}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {src ? <img src={src} alt={alt || nombre} /> : inicial}
    </span>
  )
}

export default Avatar
