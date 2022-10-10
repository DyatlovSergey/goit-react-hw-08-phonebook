import Contacts from '../../Components/AddContacts/AddContacts';
import Phonebook from '../../Components/Phonebook';
import Filter from '../../Components/Filter/Filter';

export default function PhonebookPage() {
  return (
    <section>
      <Phonebook />
      <Filter />
      <Contacts />
    </section>
  );
}