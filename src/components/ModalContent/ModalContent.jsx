import {
  ModalDiv,
  ImageDiv,
  BasicData,
  Model,
  MoreData,
  DescriptionText,
  HeaderOptional,
  RentalLi,
  RentalUl,
  RentalSpan,
  CloseDiv,
  RentalCar,
} from './ModalContant.styled';
import { CloseModal } from 'components/icons/CloseModal';
export const ModalContent = ({ closeModal, advert }) => {
  const {
    img,
    make,
    model,
    year,
    description,
    rentalConditions,
    mileage,
    rentalPrice,
  } = advert;

  return (
    <ModalDiv>
      <CloseDiv onClick={closeModal}>
        <CloseModal />
      </CloseDiv>
      <ImageDiv>
        <img src={img} width="100%" height={248} alt={make} display="block" />
      </ImageDiv>
      <BasicData>
        {make} <Model>{model}</Model>,{year}
      </BasicData>
      <MoreData>MORE DATA</MoreData>
      <DescriptionText>{description}</DescriptionText>
      <HeaderOptional>Accessories and functionalities:</HeaderOptional>
      <MoreData>MORE DATA two</MoreData>
      <HeaderOptional>Rental Conditions:</HeaderOptional>

      <RentalUl>
        {rentalConditions.split('\n').map(rental => (
          <RentalLi key={rental}>{rental}</RentalLi>
        ))}
        <RentalLi>
          Mileage:{' '}
          <RentalSpan>
            {new Intl.NumberFormat('en-US').format(mileage)}
          </RentalSpan>
        </RentalLi>
        <RentalLi>
          Price: <RentalSpan>{rentalPrice}</RentalSpan>
        </RentalLi>
      </RentalUl>

      <RentalCar href="tel:+380730000000">Rental car</RentalCar>
    </ModalDiv>
  );
};
