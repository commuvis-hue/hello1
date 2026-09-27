import { NavLink } from 'react-router-dom'
import { Search, Bell } from 'lucide-react'
import Logo from './Logo.jsx'
import { currentUser } from '../data/mock.js'

const TABS = [
  { to: '/watch', label: 'WATCH' },
  { to: '/create', label: 'CREATE' },
  { to: '/fund', label: 'FUND' },
  { to: '/trade', label: 'TRADE' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__bar">
        <Logo to="/" />
        <div className="header__actions">
          <button className="icon-btn" aria-label="검색"><Search size={24} /></button>
          <button className="icon-btn icon-btn--dot" aria-label="알림 (새 알림 있음)"><Bell size={24} /></button>
          <NavLink to="/my" className="avatar" aria-label="마이페이지">
            <img src={currentUser.avatar} alt="" />
          </NavLink>
        </div>
      </div>
      <nav className="top-tabs" aria-label="주요 메뉴">
        {TABS.map((t) => (
          <NavLink key={t.to} to={t.to} className={({ isActive }) => 'top-tabs__item' + (isActive ? ' is-active' : '')}>
            {t.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
