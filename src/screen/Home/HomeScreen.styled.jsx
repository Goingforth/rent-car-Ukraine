import styled from 'styled-components';
import image from './car.jpg';
export const HomeScreenDiv = styled.div`
  background-image: url(${image});
  opacity: 0.9;

  width: 1184px;
  height: 1050px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 250px;

  color: lightgray;
`;
export const HeaderSite = styled.p`
  margin-bottom: 40px;
  font-size: 40px;
`;

export const BlockInfo = styled.p`
  width: 50%;
  margin: 40px;
  font-size: 18px;

  color: var(--beige-color);
`;
