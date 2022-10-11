import s from "../Phonebook.module.css";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   deleteContacts,
//   fetchContacts,
//   getVisibleContacts,
// } from "../redux/phonebook/selectors";
// import { useEffect } from "react";

// export default function Contacts() {
//   const contacts = useSelector(getVisibleContacts);
//   const dispatch = useDispatch();

//   const onDeleteContactCard = (id) => {
//     dispatch(deleteContacts(id));
//   };

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
// <ul className={s.phonebookList}>
//   {contacts.map(({ id, name, phone }) => (
//     <li className={s.contact__item} key={id}>
//       <p className={s.contact__description}>
//         <span className={s.contact__name}>{name}:</span>
//         <span>{phone}</span>
//       </p>
//       <button
//         className={s.contact__delete}
//         onClick={() => onDeleteContactCard(id)}
//       >
//         <span>Delete</span>
//       </button>
//     </li>
//   ))}
// </ul>
//   );
// }

import { useDispatch, useSelector } from "react-redux";
// import s from "./Contacts.module.css";
import {
  deleteContacts,
  fetchContacts,
  getVisibleContacts,
} from "../../redux/phonebook/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector(getIsLoggedIn);

  const onDeleteContactCard = (id) => {
    dispatch(deleteContacts(id));
  };

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/signIn");
    }
  }, [loggedIn, navigate]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.phonebookList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact__item} key={id}>
          <p className={s.contact__description}>
            <span className={s.contact__name}>{name}:</span>
            <span className={s.contact__name}>{number}</span>
          </p>
          <button
            className={s.red_button}
            onClick={() => onDeleteContactCard(id)}
          >
            <span>Delete</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
