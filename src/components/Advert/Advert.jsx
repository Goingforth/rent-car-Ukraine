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
export const Advert = ({ advert, onOffFavorite }) => {
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
  //const onClick = () => alert(id);

  // console.log(advert);
  // console.log(adress);
  return (
    <AdvertDiv>
      <ImageDiv>
        <img src={img} width={274} height={268} alt={make} display="block" />
        <HeartIcon onClick={() => onOffFavorite(id)}>
          <FavoriteIcon stroke={'var(--white-color)'} fill={'none'} />
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
