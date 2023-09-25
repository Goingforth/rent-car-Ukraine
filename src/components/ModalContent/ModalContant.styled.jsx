import styled from 'styled-components';
export const ModalDiv = styled.div`
  width: 541px;
  padding: 40px;
`;
export const ImageDiv = styled.div`
  border-radius: 14px;
  overflow: hidden;

  margin-bottom: 14px;
`;

export const BasicData = styled.div`
  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: var(--text-color--dark);
`;
export const Model = styled.span`
  color: var(--blue-color);
`;
export const MoreData = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 40px;

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);

  overflow: hidden;
  margin-bottom: 28px;
`;
export const MoreDataItem = styled.li`
  margin-right: 8px;
`;
export const DescriptionText = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
export const HeaderOptional = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;
export const RentalUl = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 16px;
`;
export const RentalLi = styled.li`
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 7px 14px;

  border-radius: 35px;
  background-color: var(--text-secondary--modal);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;
export const RentalSpan = styled.span`
  color: var(--blue-color);
  font-weight: 600;
`;
export const CloseDiv = styled.div`
  cursor: pointer;
  top: 16px;
  right: 16px;
  position: absolute;
`;
export const RentalCar = styled.a`
  padding: 12px 50px;
  border-radius: 12px;

  background-color: var(--blue-color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--white-color);

  &&:hover {
    background-color: var(--blue-color--hover);
  }
`;
