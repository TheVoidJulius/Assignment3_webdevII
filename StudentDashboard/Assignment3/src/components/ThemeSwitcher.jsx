function ThemeSwitcher({ currentTheme, onThemeChange }) {
  const themes = [
    { id: 'midnight',  label: 'Midnight Blue' },
    { id: 'cyberpunk', label: 'Cyberpunk' },
    { id: 'aurora',    label: 'Aurora' },
    { id: 'rose',      label: 'Rosé' },
  ]

  return (
    <div className="theme-switcher">
      <span className="theme-switcher__label">Theme</span>
      {themes.map(theme => (
        <button
          key={theme.id}
          className={`theme-btn theme-btn--${theme.id} ${currentTheme === theme.id ? 'theme-btn--active' : ''}`}
          onClick={() => onThemeChange(theme.id)}
          aria-label={`Switch to ${theme.label} theme`}
          title={theme.label}
        />
      ))}
    </div>
  )
}

export default ThemeSwitcher
