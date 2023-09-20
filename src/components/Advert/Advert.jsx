import { useState } from 'react';
import Modal from 'react-modal';
import { ModalContent } from 'components/ModalContent/ModalContent';

import {
  AdvertDiv,
  ImageDiv,
  BasicData,
  Model,
  MoreData,
  LearnMore,
  HeartIcon,
  MoreDataItem,
} from './Advert.styled';
import { customStyles } from 'components/ModalContent/CustomStyles';
import { FavoriteIcon } from 'components/FavoriteIcon/FavoriteIcon';

export const Advert = ({ advert, onOffFavorite, favorites }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
    functionalities,
  } = advert;
  let favor = false;
  if (favorites !== null) {
    favor = favorites.split(',').includes(String(id));
  }

  const info = address.split(',').splice(1, 2);
  info.push(
    rentalCompany,
    type,
    accessories[0],
    make,
    mileage,
    functionalities[0]
  );
  console.log(info);

  return (
    <AdvertDiv>
      <ImageDiv>
        <img src={img} width={274} height={268} alt={make} display="block" />
        <HeartIcon onClick={() => onOffFavorite(id)}>
          {favor ? (
            <FavoriteIcon
              stroke={'var(--blue-color)'}
              fill={'var(--blue-color)'}
            />
          ) : (
            <FavoriteIcon stroke={'var(--white-color)'} fill={'none'} />
          )}
        </HeartIcon>
      </ImageDiv>

      <BasicData>
        <div>
          {make} <Model>{model}</Model>,{year}
        </div>
        <div>{rentalPrice}</div>
      </BasicData>
      <MoreData>
        {info.map(rental => (
          <MoreDataItem key={rental}>{rental} |</MoreDataItem>
        ))}
      </MoreData>
      <LearnMore onClick={openModal}>Learn more</LearnMore>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalContent closeModal={closeModal} advert={advert} />
      </Modal>
    </AdvertDiv>
  );
};
