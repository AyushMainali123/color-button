import { useMemo, useState } from 'react';
import './App.css';

const INITIAL_STATE = {
  COLOR: 'red',
}

function App() {

  const [color, setColor] = useState(INITIAL_STATE.COLOR);
  const textColor = useMemo(() => color === "red" ? "blue" : "red", [color]);

  
  const handleClick = () => {
    setColor('blue');
  }

  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={handleClick}>Change to { textColor}</button>
    </div>
  );
}

export default App;
