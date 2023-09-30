import {
  ModalDiv,
  ImageDiv,
  BasicData,
  Model,
  DescriptionText,
  HeaderOptional,
  RentalLi,
  RentalUl,
  RentalSpan,
  CloseDiv,
  RentalCar,
  MoreData,
  MoreDataItem,
} from './ModalContant.styled';
import { CloseModal } from 'components/icons/CloseModal';
export const ModalContent = ({ closeModal, dataModal }) => {
  const {
    img,
    make,
    model,
    year,
    description,
    rentalConditions,
    mileage,
    rentalPrice,
    accessories,
    functionalities,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
  } = dataModal;

  const info = address.split(',').splice(1, 2);
  info.push(
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type} `,
    `FuelConsumption: ${fuelConsumption}`,
    `EngineSize: ${engineSize}`
  );

  const infoAccesFunc = [...accessories, ...functionalities];

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
      <MoreData>
        {info.map(rental => (
          <MoreDataItem key={rental}>{rental} |</MoreDataItem>
        ))}
      </MoreData>
      <DescriptionText>{description}</DescriptionText>
      <HeaderOptional>Accessories and functionalities:</HeaderOptional>
      <MoreData>
        {infoAccesFunc.map(rental => (
          <MoreDataItem key={rental}>{rental} |</MoreDataItem>
        ))}
      </MoreData>
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
