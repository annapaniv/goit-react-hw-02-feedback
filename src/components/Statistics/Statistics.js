import React from 'react';
import css from './Statistics.module.css'

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  positivePercentage,
}) => (
  <div className={css.statistic}>
  <div className={css.options}>
    <p>Good : {good}</p>
    <p>Neutral : {neutral}</p>
    <p>Bad : {bad}</p></div>
    <div className={css.total}><p>Total feedback : {totalFeedbacks}</p>
    <p>Positive percentage : {positivePercentage}</p></div>
  </div>
);