import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.add('aside-collapsed');
    } else {
      document.body.classList.remove('aside-collapsed');
    }
  }, [isCollapsed]);

  return (
    <aside className={`aside ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="sidebar__toggle" onClick={handleToggle}>
        {isCollapsed ? <FaBars /> : <FaTimes />}
      </button>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#graduation" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Project" className="nav__link">
                <i className="icon-doc"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#Certificate" className="nav__link">
                <i className="icon-star"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer">
        <span className="FLname">Kanittha's</span>
      </div>
    </aside>
  );
}

export default Sidebar;
