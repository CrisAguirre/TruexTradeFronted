function EmptyState({ titulo = 'Nada por aquí', mensaje, children }) {
  return (
    <div className="empty-state">
      <h3>{titulo}</h3>
      {mensaje && <p>{mensaje}</p>}
      {children}
    </div>
  )
}

export default EmptyState
