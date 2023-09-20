import styled from 'styled-components';
import image from './car.jpg';
export const HomeScreenDiv = styled.div`
  background-image: url(${image});

  width: 1184px;
  height: 1050px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 250px;

  color: var(--white-color);
`;
export const HeaderSite = styled.p`
  margin-bottom: 40px;
  font-size: 40px;
`;
