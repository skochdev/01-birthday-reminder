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

export default BirthdayList;
