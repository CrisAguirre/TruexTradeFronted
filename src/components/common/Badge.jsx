const VARIANTES = {
  trueque: 'badge',
  venta: 'badge badge-venta',
  ambos: 'badge badge-ambos',
  neutral: 'badge badge-neutral',
}

function Badge({ children, variant = 'trueque', className = '' }) {
  return (
    <span className={`${VARIANTES[variant] ?? VARIANTES.trueque} ${className}`.trim()}>
      {children}
    </span>
  )
}

export default Badge
