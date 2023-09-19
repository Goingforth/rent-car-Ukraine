import styled from 'styled-components';
import { AdvertDiv } from './Advert.styled';
export const Advert = ({ advert }) => {
  const { img } = advert;
  console.log(typeof advert);
  console.log(advert);
  return (
    <AdvertDiv>
      <img src={img} width={274} height={268} alt="" display="block" />

      <div>Info</div>
      <button type="button">learn more</button>
    </AdvertDiv>
  );
};
