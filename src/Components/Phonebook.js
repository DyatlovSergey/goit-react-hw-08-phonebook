import s from "./Phonebook.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteContacts,
  fetchContacts,
  getVisibleContacts,
} from "../Redux/selectors";
import { useEffect } from "react";

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContactCard = (id) => {
    dispatch(deleteContacts(id));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.phonebookList}>
      {contacts.map(({ id, name, phone }) => (
        <li className={s.contact__item} key={id}>
          <p className={s.contact__description}>
            <span className={s.contact__name}>{name}:</span>
            <span>{phone}</span>
          </p>
          <button
            className={s.contact__delete}
            onClick={() => onDeleteContactCard(id)}
          >
            <span>Delete</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
