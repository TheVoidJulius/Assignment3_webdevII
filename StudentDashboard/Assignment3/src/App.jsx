import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddStudentForm from './components/AddStudentForm'
import StudentTable from './components/StudentTable'
import StatsBar from './components/StatsBar'
import ThemeSwitcher from './components/ThemeSwitcher'

const initialStudents = [
  { id: 1, name: 'Aarav Sharma', score: 85 },
  { id: 2, name: 'Priya Patel', score: 72 },
  { id: 3, name: 'Rohan Gupta', score: 35 },
  { id: 4, name: 'Ananya Singh', score: 91 },
  { id: 5, name: 'Kabir Mehta', score: 28 },
]

function App() {
  const [students, setStudents] = useState(initialStudents)
  const [nextId, setNextId] = useState(6)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('scoreboard-theme') || 'midnight'
  })

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('scoreboard-theme', theme)
  }, [theme])

  const addStudent = (name, score) => {
    const newStudent = { id: nextId, name, score: Number(score) }
    setStudents([...students, newStudent])
    setNextId(nextId + 1)
  }

  const updateScore = (id, newScore) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    ))
  }

  const incrementScore = (id) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, score: Math.min(100, s.score + 5) } : s
    ))
  }

  const decrementScore = (id) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, score: Math.max(0, s.score - 5) } : s
    ))
  }

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id))
  }

  return (
    <>
      {/* Animated moving background */}
      <div className="animated-bg" aria-hidden="true">
        <div className="animated-bg__mesh"></div>
        <div className="animated-bg__orb animated-bg__orb--1"></div>
        <div className="animated-bg__orb animated-bg__orb--2"></div>
        <div className="animated-bg__orb animated-bg__orb--3"></div>
        <div className="animated-bg__orb animated-bg__orb--4"></div>
        <div className="animated-bg__particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      {/* Theme Switcher */}
      <ThemeSwitcher currentTheme={theme} onThemeChange={setTheme} />

      <div className="app">
        <Header />
        <AddStudentForm onAddStudent={addStudent} />
        <StatsBar students={students} />
        <StudentTable
          students={students}
          onUpdateScore={updateScore}
          onIncrementScore={incrementScore}
          onDecrementScore={decrementScore}
          onDeleteStudent={deleteStudent}
        />
        <footer className="footer">
          <p className="footer__text">
            Built with <span className="footer__heart">♥</span> using React + Vite
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
