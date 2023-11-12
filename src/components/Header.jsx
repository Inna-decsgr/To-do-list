import React from 'react';
import styles from './Header.module.css'
import { useDarkMode } from '../context/DarkModeContext';
import { BiSolidMoon } from "react-icons/bi";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";

export default function Header({filters, filter, onFilterChange}) {
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode && <BiSolidMoon />}
        {darkMode && <BsFillEmojiSunglassesFill />}
      </button>
      <ul className={styles.filters}>
        {
          filters.map((value, index) => 
            <li key={index}>
              <button className={`${styles.filter} ${filter === value && styles.selected}`} onClick={() => onFilterChange(value)}>{value}</button>
            </li>
          )
        }
      </ul>
    </header>
  );
}

