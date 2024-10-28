import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RangeInput = ({ initialPreviousValue = 0 }) => {
  const [value, setValue] = useState(50); // Початкове значення рейнджу
  const previousValue = initialPreviousValue; // Фіксоване попереднє значення

  const handleChange = (e) => {
    setValue(e.target.value); // Оновлюємо значення рейнджу
  };

  // Перевірка на збільшення або зменшення, та обчислення різниці
  const getChangeMessage = () => {
    const difference = value - previousValue;
    if (difference > 0) {
      return `Значення збільшилось на ${difference}`;
    } else if (difference < 0) {
      return `Значення зменшилось на ${Math.abs(difference)}`;
    } else {
      return 'Значення не змінилось';
    }
  };

  return (
    <div className="container mt-4">
      <h3>Range Input</h3>
      <input
        type="range"
        className="form-range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <div className="mt-2">
        <p>Поточне значення: {value}</p>
        <p>Попереднє значення: {previousValue}</p>
        <p>{getChangeMessage()}</p>
      </div>
    </div>
  );
};

export default RangeInput;
