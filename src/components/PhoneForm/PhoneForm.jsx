import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Form,
  FormButton,
  FormField,
  ErrorMessage,
  Field,
} from './PhoneForm.style';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const phoneRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const phoneError =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please, enter contact name'),
  number: Yup.string()
    .matches(phoneRegex, phoneError)
    .required('Please, enter phone number'),
});

export const PhoneForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (contacts.find(contact => contact.name === values.name)) {
      return toast.error(`${values.name} is already in contacts.`);
    }

    dispatch(addContact(values));
    actions.resetForm();

    toast.success(
      `Contact ${values.name} was successfully added to you phonebook`
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            Name
            <Field type="text" name="name" autoComplete="off" />
            <ErrorMessage name="name" component="span" />
          </FormField>
          <FormField>
            Number
            <Field type="tel" name="number" autoComplete="off" />
            <ErrorMessage name="number" component="span" />
          </FormField>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};
