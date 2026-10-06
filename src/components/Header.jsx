import { NavLink } from 'react-router-dom'

export default function Header({ title }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label={`${title}, на главную`}>
        <span className="brand-mark">S</span>
        <span>{title}<small>учебный проект на React</small></span>
      </a>
      <nav className="main-nav" aria-label="Основная навигация">
        <NavLink to="/" end>Главная</NavLink>
        <NavLink to="/about">О проекте</NavLink>
      </nav>
      <a className="header-chip" href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer">
        <span className="status-dot" /> JSONPlaceholder
      </a>
    </header>
  )
}
