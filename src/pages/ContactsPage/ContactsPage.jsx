import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PhoneForm } from 'components/PhoneForm/PhoneForm';
import { PhoneList } from 'components/PhoneList/PhoneList';
import { Filter } from 'components/Filter/Filter';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { Main, MainTitle, Title } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Main>
      <MainTitle>Phonebook</MainTitle>
      <PhoneForm />

      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>{error}</b>}
      <PhoneList />
    </Main>
  );
};

export default ContactsPage;