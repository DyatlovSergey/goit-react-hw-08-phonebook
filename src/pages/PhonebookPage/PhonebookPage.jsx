import Contacts from '../../Components/Phonebook/Phonebook';
import Phonebook from '../../Components/Contacts/Contacts';
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