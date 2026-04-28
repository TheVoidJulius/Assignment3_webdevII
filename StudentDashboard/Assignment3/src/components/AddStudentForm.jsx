import { useState } from 'react'

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || score === '') return

    const parsed = Number(score)
    if (isNaN(parsed) || parsed < 0 || parsed > 100) return

    onAddStudent(name.trim(), parsed)
    setName('')
    setScore('')
  }

  return (
    <div className="form-section glass-card">
      <div className="form-section__header">
        <div className="form-section__icon">➕</div>
        <div>
          <h2 className="form-section__title">Add New Student</h2>
          <p className="form-section__desc">Enter name and score to add to the board</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label className="form-label" htmlFor="student-name">Student Name</label>
            <input
              id="student-name"
              className="form-input"
              type="text"
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="student-score">Score (0–100)</label>
            <input
              id="student-score"
              className="form-input"
              type="number"
              min="0"
              max="100"
              placeholder="e.g. 85"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn--primary">
            Add Student
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddStudentForm
