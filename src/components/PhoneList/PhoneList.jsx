import { useSelector } from 'react-redux';

import { PhoneItem } from 'components/PhoneItem/PhoneItem';
import { selectFilteredContacts } from 'redux/filter/selectors';

export const PhoneList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <PhoneItem id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
};
