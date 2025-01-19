import React from 'react';

function ThemeSwitcher({ isDarkMode, toggleDarkMode }) {
  return (
    <button className="btn btn-success" onClick={toggleDarkMode}>
      {isDarkMode ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
    </button>
  );
}

export default ThemeSwitcher;