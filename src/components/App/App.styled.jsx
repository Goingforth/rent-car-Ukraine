import styled from 'styled-components';

export const Container = styled.div`
  width: 1440px;
  margin: auto;
  /* padding: 150px 128px; */
  padding: 0 128px 150px 128px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
`;
export const NavMenu = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  margin-bottom: 140px;

  display: flex;
  z-index: 100;
  gap: 32px;
  justify-content: center;
  background-color: var(--white-color);

  font-size: 18px;
  font-weight: 500;
`;
