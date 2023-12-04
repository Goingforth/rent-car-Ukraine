import styled from 'styled-components';

export const HeaderInput = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--name-filter-color);
`;

export const InputsMileas = styled.div`
  display: flex;
`;

export const InputUnit = styled.div`
  display: flex;
  width: 160px;
  height: 48px;
  padding-left: 24px;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text-color--dark);
  gap: 10px;

  border-radius: ${props =>
    props.$position === 'left' ? '14px 0 0 14px' : '0 14px 14px 0 '};

  border-right: ${props =>
    props.$position === 'left' ? '1px solid rgba(138, 138, 137,0.2)' : 'none'};
  background-color: var(--bacground-selected-color);
`;

export const InputMileas = styled.input`
  width: 100%;
  outline: none;
  background-color: var(--bacground-selected-color);
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text-color--dark);
`;
