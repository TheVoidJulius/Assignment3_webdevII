function StatsBar({ students }) {
  const total = students.length
  const passing = students.filter(s => s.score >= 40).length
  const failing = total - passing
  const avg = total > 0
    ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / total)
    : 0

  return (
    <div className="stats-bar">
      <div className="stat-card stat-card--total">
        <span className="stat-card__icon">👥</span>
        <div className="stat-card__value">{total}</div>
        <div className="stat-card__label">Students</div>
      </div>
      <div className="stat-card stat-card--pass">
        <span className="stat-card__icon">✅</span>
        <div className="stat-card__value">{passing}</div>
        <div className="stat-card__label">Passing</div>
      </div>
      <div className="stat-card stat-card--fail">
        <span className="stat-card__icon">⚠️</span>
        <div className="stat-card__value">{failing}</div>
        <div className="stat-card__label">Failing</div>
      </div>
      <div className="stat-card stat-card--avg">
        <span className="stat-card__icon">📊</span>
        <div className="stat-card__value">{avg}%</div>
        <div className="stat-card__label">Average</div>
      </div>
    </div>
  )
}

export default StatsBar
