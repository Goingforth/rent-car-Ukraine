import styled from 'styled-components';

export const NameSelected = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--name-filter-color);
`;

export const Selected = styled.div`
  display: flex;
  width: ${props => props.$widthBox};
  height: 48px;
  box-sizing: border-box;

  position: static;
  margin-bottom: 4px;
  padding: 14px 14px 14px 18px;

  border-radius: 14px;
  align-items: center;
  justify-content: space-between;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text-color--dark);

  background-color: var(--bacground-selected-color);

  user-select: 'none';
`;

export const SelectedButton = styled.div`
  cursor: pointer;
`;

export const SelectedDiv = styled.div`
  display: flex;
  position: absolute;
  z-index: 10000;
  width: ${props => props.$widthBox};

  box-sizing: border-box;

  padding-left: 18px;
  padding-right: 8px;

  align-items: center;

  border-radius: 14px;
  border: 1px solid var(--border-select-dropdown-color);
  background-color: var(--white-color);
`;
export const SelectedItems = styled.div`
  width: 100%;
  max-height: 244px;

  overflow-y: scroll;

  &&::-webkit-scrollbar {
    width: 8px;

    background-color: var(--white-color);
  }
  &&::-webkit-scrollbar-thumb {
    height: 130px;
    border-radius: 10px;
    background-color: var(--border-select-dropdown-color);
  }
`;

export const SelectedItem = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  cursor: pointer;
  color: var(--text-selectItem-color);
  &&:hover {
    color: var(--text-color--dark);
  }
`;
