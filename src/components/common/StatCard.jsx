function StatCard({ valor, etiqueta }) {
  return (
    <div className="stat-card">
      <strong>{valor}</strong>
      <span>{etiqueta}</span>
    </div>
  )
}

export default StatCard
