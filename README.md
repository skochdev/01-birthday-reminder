# 01-Birthday reminder

* Utilizes basic usage of **useState()** hook
* Conditional render 
* Events
* TypeScript
* CSS modules
* React Icons library

```tsx
import style from './BirthdayList.module.css';
import { RiDeleteBin2Fill } from 'react-icons/ri';

type Props = {
  birthdays: {
    id: number;
    name: string;
    age: number;
    image: string;
  }[];
  onDelete: (id: number) => void;
};

const BirthdayList = ({ birthdays, onDelete }: Props) => {
  return (
    <>
      <ul className={style.birthdayList}>
        {birthdays.map(({ id, name, age, image }) => {
          return (
            <li key={id} className={style.birthdayCard}>
              <div className={style.imageWrapper}>
                <img src={image} alt={name} />
              </div>
              <div className={style.detailsWrapper}>
                <h2 className={style.name}>{name}</h2>
                <p className={style.age}>turns {age} today</p>
              </div>
              <button
                type="button"
                aria-label="delete"
                onClick={() => onDelete(id)}>
                <RiDeleteBin2Fill className={style.trashIcon} size={20} />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

```

 App components looks like this 

```tsx
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
```


And some of the CSS 

```css
.heading {
  text-align: center;
}

.birthdayList {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  background-color: #f5ede5;
  padding: 2rem 1rem;
  border-radius: 2px;
}

.birthdayCard {
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem 1rem;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
}

.age {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
}

.birthdayCard + .birthdayCard {
  margin-top: 1rem;
}

.imageWrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.detailsWrapper {
}

img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: 50% 30%;
}

button {
  display: block;
  border: none;
  background-color: #eeeeee;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #545454;
}

.trashIcon {
  color: #545454;
}

button:hover .trashIcon,
button:focus .trashIcon {
  color: #e5e5e5;
}

```