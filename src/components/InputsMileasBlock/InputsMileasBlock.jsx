import React from 'react';

import {
  HeaderInput,
  InputMileas,
  InputsMileas,
  InputUnit,
} from './InputMileas.styled';

const InputsMileasBlock = ({ onSetFilterParams, filterParams }) => {
  const handleStateChange = e => {
    const { name, value } = e.target;
    onSetFilterParams(name, value);
  };
  return (
    <div>
      <HeaderInput>Сar mileage / km</HeaderInput>
      <InputsMileas>
        <InputUnit $position="left">
          From
          <InputMileas
            type="text"
            onChange={handleStateChange}
            value={filterParams.from}
            pattern="\d [0-9]}"
            name="from"
          />
        </InputUnit>
        <InputUnit $position="right">
          To
          <InputMileas
            type="text"
            onChange={handleStateChange}
            value={filterParams.to}
            pattern="\d [0-9]}"
            name="to"
          />
        </InputUnit>
      </InputsMileas>
    </div>
  );
};
export default InputsMileasBlock;
