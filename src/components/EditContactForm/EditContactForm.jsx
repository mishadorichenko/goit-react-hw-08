import { useId } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import {
  selectActiveContactId,
  selectContacts,
  selectIsModalOpen,
} from '../../redux/contacts/selectors';
import { clearActiveContactId, toggleModal } from '../../redux/contacts/slice';
import { handleKeyPress } from '../../handleKeyPress';

import css from './EditContactForm.module.css';

const UserAddSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'xxx-xxx-xxxx')
    .required('Required!'),
});

function EditContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const isOpen = useSelector(selectIsModalOpen);
  const activeContactId = useSelector(selectActiveContactId);
  const contacts = useSelector(selectContacts);

  const activeContact =
    contacts.find(contact => contact.id === activeContactId) || {};

  const handleCancel = () => {
    dispatch(toggleModal());
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      editContact({
        id: activeContactId,
        name: values.username,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Successfully updated!', { position: 'top-center' });
        dispatch(clearActiveContactId());
        dispatch(toggleModal());
      })
      .catch(() => {
        toast.error('Error, input correct data', {
          position: 'top-center',
        });
      });
    actions.resetForm();
  };

  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={handleCancel}
      contentLabel="Edit Contact Form"
    >
      <Formik
        initialValues={{
          name: activeContact.name || '',
          number: activeContact.number || '',
        }}
        validationSchema={UserAddSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={css.formContainer}>
            <label htmlFor={nameFieldId} className={css.label}>
              Username
            </label>
            <div className={css.wrap}>
              <Field
                type="text"
                name="username"
                id={nameFieldId}
                className={css.inputField}
              />
              <ErrorMessage
                name="username"
                component="span"
                className={css.errorMessage}
              />
            </div>

            <label htmlFor={phoneFieldId} className={css.label}>
              Phone
            </label>
            <div className={css.wrap}>
              <Field
                type="text"
                onKeyPress={handleKeyPress}
                name="number"
                id={phoneFieldId}
                className={css.inputField}
                onChange={event => {
                  const formattedPhoneNumber = event.target.value;
                  setFieldValue('number', formattedPhoneNumber);
                }}
              />
              <ErrorMessage
                name="number"
                component="span"
                className={css.errorMessage}
              />
            </div>
            <div className={css.buttonContainer}>
              <button type="submit" className={css.submitButton}>
                Edit
              </button>
              <button
                type="button"
                className={css.submitButton}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default EditContactForm;
