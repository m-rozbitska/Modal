// src/components/Navigation.js
import React, { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;

// import React from 'react';

// const App = () => {
// 	return (
// 		<div className = 'app'>
// 			<nav>
// 				<div className="burger_btn">
// 					<span/>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// };

// export default App;