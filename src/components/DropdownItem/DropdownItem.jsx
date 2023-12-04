import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  NameSelected,
  Selected,
  SelectedButton,
  SelectedDiv,
  SelectedItem,
  SelectedItems,
} from './DropdownItem.styled';
import down from '../../components/icons/chevron-down.svg';
import up from '../../components/icons/chevron-up.svg';
const DropdownItem = ({
  $widthBox,
  title,
  placeholder,
  dataArray,
  placeholderPrice,
  name,
  filterParams,
  onSetFilterParams,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <NameSelected>{title}</NameSelected>
      <Selected $widthBox={$widthBox}>
        {filterParams[name] || placeholder}
        <SelectedButton
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {!isActive ? (
            <img src={down} alt="Down" />
          ) : (
            <img src={up} alt="Up" />
          )}
        </SelectedButton>
      </Selected>
      {isActive && (
        <SelectedDiv
          $widthBox={$widthBox}
          onPointerLeave={() => {
            onSetFilterParams(name, placeholder);
            setIsActive(false);
          }}
        >
          <SelectedItems>
            {dataArray.map(dataArrayItem => (
              <SelectedItem
                key={nanoid()}
                onPointerDown={() => {
                  setIsActive(false);
                }}
                onPointerEnter={() => {
                  const data = placeholderPrice
                    ? `To ${dataArrayItem}$`
                    : `${dataArrayItem}`;
                  onSetFilterParams(name, `${data}`);
                }}
              >
                {dataArrayItem}
              </SelectedItem>
            ))}
          </SelectedItems>
        </SelectedDiv>
      )}
    </div>
  );
};
export default DropdownItem;
