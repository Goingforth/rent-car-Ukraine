import React from 'react';
import { Search } from './SearchButton.styled';

const SearchButton = ({ onClick, content }) => {
  return (
    <>
      <Search type="button" onClick={onClick}>
        {content}
      </Search>
    </>
  );
};

export default SearchButton;
