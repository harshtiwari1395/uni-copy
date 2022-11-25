

import { useState } from 'react';
export default function CheckBox({ name, onChange, initialState = true }) {
    const [isChecked, setIsChecked] = useState(initialState);
  
    function handleOnChange(event) {
      const isChecked = !!event.target.checked;
      setIsChecked(isChecked);
      // Fire callback
      if (onChange) onChange(isChecked);
    }
  
    return (
      <div className="App">
        <input
          onChange={handleOnChange}
          name={name}
          checked={isChecked}
          type="checkbox"
        />
      </div>
    );
  }
  