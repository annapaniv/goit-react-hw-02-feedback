import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttonContainer}>
    {options.map((option) => (
      <button
        className={css.button}
        type="button"
        key={option}
        name={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);