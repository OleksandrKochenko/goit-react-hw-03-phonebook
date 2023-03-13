import ContactItem from './contact_item';
import shortid from 'shortid';

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(item => {
        const id = shortid.generate();
        return <ContactItem key={id} name={item.name} tel={item.tel} />;
      })}
    </ul>
  );
}
