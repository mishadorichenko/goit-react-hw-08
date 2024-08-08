import ContactForm from '../ContactForm/ContactForm';
import EditContactForm from '../EditContactForm/EditContactForm';
import css from './FormsWrap.module.css';

function FormsWrap() {
  return (
    <div className={css.wrap}>
      <ContactForm />
      <EditContactForm />
    </div>
  );
}

export default FormsWrap;
