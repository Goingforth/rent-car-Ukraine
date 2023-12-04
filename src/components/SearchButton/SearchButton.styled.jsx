import styled from 'styled-components';

export const Search = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px, 44px, 14px, 44px;
  border-radius: 12px;

  background-color: var(--blue-color);
  margin-top: 26px;

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--white-color);

  cursor: pointer;
  &&:hover {
    background-color: var(--blue-color--hover);
  }
`;
