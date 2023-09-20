import { ModalDiv } from './ModalContant.styled';
export const ModalContent = ({ closeModal, advert }) => {
  const { id } = advert;
  return (
    <ModalDiv>
      <h2>Заголовок модального окна</h2>
      <p>{id}</p>
      <button onClick={closeModal}>Закрыть</button>
    </ModalDiv>
  );
};
