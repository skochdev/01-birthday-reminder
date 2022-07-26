import React, { useState } from 'react';
import style from './App.module.css';
import BirthdayList from './BirthdayList/BirthdayList';
import birthdayData from '../data';

function App() {
  const [birthdays, setBirthdays] = useState(birthdayData);

  const handleDeleteBirthday = (id: number) => {
    setBirthdays(birthdays.filter(birthday => birthday.id !== id));
  };

  const birthdaysCount = birthdays.length;

  return (
    <section>
      {birthdaysCount !== 0 ? (
        <h1>Birthdays today: {birthdaysCount}</h1>
      ) : (
        <p className={style.noBirthdaysText}>No birthdays today</p>
      )}
      {birthdays.length > 0 && (
        <BirthdayList birthdays={birthdays} onDelete={handleDeleteBirthday} />
      )}
    </section>
  );
}

export default App;
