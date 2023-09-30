import {
  ImageDiv,
  BasicData,
  Model,
  MoreData,
  LearnMore,
  HeartIcon,
  MoreDataItem,
} from './Advert.styled';

import { FavoriteIcon } from 'components/icons/FavoriteIcon/FavoriteIcon';

export const Advert = ({ advert, onOffFavorite, favorites, openModal }) => {
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

  return (
    <>
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
      <LearnMore onClick={() => openModal(advert)}>Learn more</LearnMore>
    </>
  );
};
