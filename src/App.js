import { useMemo, useState } from 'react';
import './App.css';

const INITIAL_STATE = {
  COLOR: 'red',
  disabled: false
}

function App() {

  const [color, setColor] = useState(() => INITIAL_STATE.COLOR);
  const [disabled, setDisabled] = useState(() => INITIAL_STATE.disabled);

  const textColor = useMemo(() => color === "red" ? "blue" : "red", [color]);

  const handleClick = () => {
    setColor('blue');
  }

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setDisabled(isChecked);
  }

  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={handleClick} disabled={disabled}>
        Change to {textColor}
      </button>
      <input
        type={"checkbox"}
        checked={disabled}
        aria-checked={disabled}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default App;