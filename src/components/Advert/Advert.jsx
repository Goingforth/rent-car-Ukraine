import {
  AdvertDiv,
  ImageDiv,
  BasicData,
  Model,
  MoreData,
  LearnMore,
  HeartIcon,
} from './Advert.styled';
import { FavoriteIcon } from 'components/FavoriteIcon/FavoriteIcon';
export const Advert = ({ advert, onOffFavorite, favorites }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    // adress,
    // rentalCompany,
    // type,
    // mileage,
    // accessories,
    // functionalities,
  } = advert;
  let favor = false;
  if (favorites !== null) {
    favor = favorites.split(',').includes(String(id));
  }

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
      <MoreData>MORE DATA</MoreData>
      <LearnMore>Learn more</LearnMore>
    </AdvertDiv>
  );
};
