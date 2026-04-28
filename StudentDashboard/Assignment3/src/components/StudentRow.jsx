function StudentRow({ student, index, onUpdateScore, onIncrementScore, onDecrementScore, onDeleteStudent }) {
  const isPassing = student.score >= 40
  const initials = student.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  // Cycle through avatar color variants
  const avatarVariant = student.id % 6

  const handleScoreChange = (e) => {
    const val = e.target.value
    if (val === '') {
      onUpdateScore(student.id, 0)
      return
    }
    const num = Number(val)
    if (!isNaN(num) && num >= 0 && num <= 100) {
      onUpdateScore(student.id, num)
    }
  }

  return (
    <tr className="s-row">
      <td>
        <span className="s-row__num">{index}</span>
      </td>
      <td>
        <div className="s-row__name">
          <div className={`s-row__avatar s-row__avatar--${avatarVariant}`}>
            {initials}
          </div>
          <span className="s-row__name-text">{student.name}</span>
        </div>
      </td>
      <td className="s-row__score-cell">
        <div className="score-control">
          <input
            className="score-input"
            type="number"
            min="0"
            max="100"
            value={student.score}
            onChange={handleScoreChange}
            aria-label={`Score for ${student.name}`}
          />
          <div className="score-btns">
            <button
              className="btn btn--icon btn--up"
              onClick={() => onIncrementScore(student.id)}
              aria-label="Increase score"
              title="+5"
            >
              ▲
            </button>
            <button
              className="btn btn--icon btn--down"
              onClick={() => onDecrementScore(student.id)}
              aria-label="Decrease score"
              title="−5"
            >
              ▼
            </button>
          </div>
        </div>
      </td>
      <td className="s-row__status-cell">
        <span className={`badge ${isPassing ? 'badge--pass' : 'badge--fail'}`}>
          <span className="badge__indicator"></span>
          {isPassing ? 'Pass' : 'Fail'}
        </span>
      </td>
      <td className="s-row__actions">
        <button
          className="btn btn--ghost"
          onClick={() => onDeleteStudent(student.id)}
          aria-label={`Delete ${student.name}`}
          title="Remove student"
        >
          🗑️
        </button>
      </td>
    </tr>
  )
}

export default StudentRow
