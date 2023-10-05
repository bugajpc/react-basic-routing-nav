import React from 'react';
import { Link } from 'react-router-dom';
// npm install --save react-router-dom
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Route content */}
    </div>
  );
}

export default App;
