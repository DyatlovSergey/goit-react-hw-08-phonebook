import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <h1>
        Welcome to <span className={s.titlePart}>Phonebook</span>{" "}
      </h1>
      <p className={s.titleDescription}>
     We are glad to welcome you on the main page of our application. Using the phone book, you can easily add, search and delete your contacts. Anytime and anywhere you can always go and find the number you need and contact the person.{" "}
      </p>
     
    </>
  );
}
