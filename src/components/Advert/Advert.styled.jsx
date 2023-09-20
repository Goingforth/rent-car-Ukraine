import styled from 'styled-components';
export const AdvertDiv = styled.div``;
export const ImageDiv = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;

  margin-bottom: 14px;
`;

export const BasicData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--text-color--dark);
`;

export const Model = styled.span`
  color: var(--blue-color);
`;

export const MoreData = styled.div`
  height: 40px;
  border: 1px solid grey;
  background-color: grey;

  margin-bottom: 28px;
`;

export const LearnMore = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 14px;
  font-weight: 700;
  line-height: 20px;

  border: none;
  border-radius: 12px;
  background-color: var(--blue-color);
  color: var(--white-color);

  &:hover {
    cursor: pointer;
  }
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;
