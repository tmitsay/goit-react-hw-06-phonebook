import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactList.Item.module.css';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li key={id} className={css.item}>
      <p className={css.name}>
        {name}
        <span className={css.number}>{number}</span>
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
