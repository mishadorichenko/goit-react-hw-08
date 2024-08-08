import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import toast from 'react-hot-toast';
import style from './RegistrationForm.module.css';
import * as Yup from 'yup';

const registSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
});

function RegistrationForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const mailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registSchema}
      onSubmit={(values, actions) => {
        const newUser = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        dispatch(register(newUser))
          .unwrap()
          .then(() => {
            toast.success('Success!', { position: 'top-center' });
          })
          .catch(() => {
            toast.error('Error, input correct data', {
              position: 'top-center',
            });
          });
        actions.resetForm();
      }}
    >
      <Form className={style.formContainer}>
        <label htmlFor={nameFieldId} className={style.label}>
          Name
        </label>
        <div className={style.wrap}>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={style.inputField}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={style.errorMessage}
          />
        </div>
        <label htmlFor={mailFieldId} className={style.label}>
          Email
        </label>
        <div className={style.wrap}>
          <Field
            type="email"
            name="email"
            id={mailFieldId}
            className={style.inputField}
          />
          <ErrorMessage
            name="email"
            component="span"
            className={style.errorMessage}
          />
        </div>
        <label htmlFor={passwordFieldId} className={style.label}>
          Password
        </label>
        <div className={style.wrap}>
          <Field
            type="password"
            name="password"
            id={passwordFieldId}
            className={style.inputField}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={style.errorMessage}
          />
        </div>
        <button type="submit" className={style.submitButton}>
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
