import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';

import { deleteContact } from 'redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { EditForm } from 'components/EditForm/EditForm';

import { Btn, Info, Wrapper } from './PhoneItem.styled';

export const PhoneItem = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const btn = useRef();

  const handleDelete = () => {
    // dispatch(deleteContact(id));
    // btn.current.disabled = true;

    // toast.info(`Сontact ${name} has been deleted`);


    dispatch(deleteContact(id))
    .unwrap()
    .then((success) => {
      toast.info(`Сontact ${name} has been deleted`)
    })
    .catch((error) => {
      toast.error(`Сontact ${name} not deleted`);
    })

  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Info>
      {name}: {number}
      <Wrapper>
        <Btn type="button" onClick={openModal}>
          Edit
        </Btn>
        <Btn type="button" ref={btn} onClick={handleDelete}>
          Delete
        </Btn>
      </Wrapper>
      {showModal && (
        <Modal close={closeModal}>
          <EditForm id={id} close={closeModal} />
        </Modal>
      )}
    </Info>
  );
};

PhoneItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
