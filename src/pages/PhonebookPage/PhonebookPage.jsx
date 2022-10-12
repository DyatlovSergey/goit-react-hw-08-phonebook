import Contacts from '../../Components/Phonebook/Phonebook';
import Phonebook from '../../Components/Contacts/Contacts';
import Filter from '../../Components/Filter/Filter';
import s from "../../Components/Phonebook.module.css";

export default function PhonebookPage() {
  return (
    <section>
      <div className={s.new}>
        <Contacts />
        <Filter />
      </div>
     
      <Phonebook />
     
    
    </section>
  );
}