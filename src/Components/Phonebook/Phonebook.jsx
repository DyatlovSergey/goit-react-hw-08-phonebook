import s from "../Phonebook.module.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addContacts, getContacts } from "../../redux/phonebook/selectors";
// import { Notify } from "notiflix/build/notiflix-notify-aio";

// export default function Phonebook() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const contacts = useSelector(getContacts);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "number":
//         setPhone(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();
//     const repeatName = contacts.find((contact) => {
//       return contact.name.toLowerCase() === name.toLowerCase();
//     });
//     if (!repeatName) {
//       Notify.success(`${name} is added in contacts`);
//       dispatch(addContacts({ name, phone }));
//       setPhone("");
//       setName("");
//       return;
//     }
//     Notify.warning(`${name} is already in contacts`);
//   };

//   return (
//     <>
//       <h2 className={s.phonebookTitle}>Phonebook</h2>
//       <form className={s.phonebookList} onSubmit={formSubmit}>
//         <label>Name</label>
//         <input
//           className={s.input}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <label>Number</label>
//         <input
//           className={s.input}
//           type="tel"
//           name="number"
//           value={phone}
//           onChange={handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button className={s.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     </>
//   );
// }


// import { BsFillTelephonePlusFill } from 'react-icons/bs';
// import { IconContext } from 'react-icons';
// import s from './Phonebook.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, getContacts } from '../../redux/phonebook/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    const repeatName = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (!repeatName) {
      Notify.success(`${name} is added in contacts`);
      dispatch(addContacts({ name, number }));
      setNumber('');
      setName('');
      return;
    }
    Notify.warning(`${name} is already in contacts`);
  };

  return (
    <>
      {/* <h2 className={s.phonebookTitle}>
        Phonebook
        <IconContext.Provider
          value={{
            color: 'rgb(156, 99, 209)',
            size: '25px',
            style: { margin: '0 0 0 15px' },
          }}
        >
          <BsFillTelephonePlusFill />
        </IconContext.Provider>
      </h2> */}
      <form className={s.phonebookForm} onSubmit={formSubmit}>
        <div className={s.inputBox}>
          {' '}
          <label className={s.label}>Name</label>
          <input
            className={s.input}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan and others"
            required
          />
        </div>
        <div className={s.inputBox}>
          <label className={s.label}>Phone</label>
          <input
            className={s.input}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="The phone number must be numeric and may contain spaces, dashes, parentheses, and may begin with +"
            required
          />
        </div>
        <div className={s.buttonBox}>
          <button className={s.green_button} type="submit">
            Add contact
          </button>
        </div>
      </form>
    </>
  );
}