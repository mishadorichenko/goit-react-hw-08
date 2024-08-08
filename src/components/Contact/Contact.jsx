import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import {
  TbPhoneFilled,
  TbUserEdit,
  TbUserFilled,
  TbUserX,
} from 'react-icons/tb';
import { setActiveContactId, toggleModal } from '../../redux/contacts/slice';

function Contact({ contact }) {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  const handleEdit = () => {
    dispatch(setActiveContactId(id));
    dispatch(toggleModal());
  };

  return (
    <div className={css.container}>
      <div>
        <div className={css.contactData}>
          <TbUserFilled />
          <p>{name}</p>
        </div>
        <div className={css.contactData}>
          <TbPhoneFilled />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.button} type="button" onClick={handleEdit}>
        <TbUserEdit />
      </button>
      <button className={css.button} type="button" onClick={handleDelete}>
        <TbUserX />
      </button>
    </div>
  );
}
export default Contact;
