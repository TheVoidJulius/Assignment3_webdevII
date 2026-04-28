import StudentRow from './StudentRow'

function StudentTable({ students, onUpdateScore, onIncrementScore, onDecrementScore, onDeleteStudent }) {
  return (
    <div className="table-section glass-card">
      <div className="table-section__toolbar">
        <div className="table-section__title-group">
          <div className="table-section__icon">📋</div>
          <h2 className="table-section__title">Student Records</h2>
        </div>
        <span className="table-section__count-badge">
          {students.length} record{students.length !== 1 ? 's' : ''}
        </span>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state__visual">📭</div>
          <p className="empty-state__title">No students yet</p>
          <p className="empty-state__desc">Add your first student using the form above</p>
        </div>
      ) : (
        <div className="table-wrap">
          <table className="s-table">
            <thead>
              <tr className="s-table__head">
                <th>#</th>
                <th>Student</th>
                <th className="th--center">Score</th>
                <th className="th--center">Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <StudentRow
                  key={student.id}
                  student={student}
                  index={index + 1}
                  onUpdateScore={onUpdateScore}
                  onIncrementScore={onIncrementScore}
                  onDecrementScore={onDecrementScore}
                  onDeleteStudent={onDeleteStudent}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default StudentTable
