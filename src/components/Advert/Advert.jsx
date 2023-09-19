import {
  AdvertDiv,
  ImageDiv,
  BasicData,
  Model,
  MoreData,
  LearnMore,
} from './Advert.styled';
export const Advert = ({ advert }) => {
  const {
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

  // console.log(advert);
  // console.log(adress);
  return (
    <AdvertDiv>
      <ImageDiv>
        <img src={img} width={274} height={268} alt={make} display="block" />
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
