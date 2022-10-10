import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <h1>
        Welcome to <span className={s.titlePart}>Phonebook</span>{" "}
      </h1>
      <p className={s.titleDescription}>
        People use the contact book every day. They prefer to use them rather
        than memorize phone numbers by heart, as it is very convenient to use.
        For example mobile phone books where you just have to choose a name
        person, click on it and it will be automatically made dialing a number.{" "}
      </p>
      <p className={s.titleDescription}>
        The <span className={s.titlePart}>Phonebook</span> can be implemented
        even within the company. Using the contact book, employees can call each
        other in seconds. Remember the numbers or ask colleagues are not
        required. Because all data will be stored in the electronic contact
        book.
      </p>
    </>
  );
}
