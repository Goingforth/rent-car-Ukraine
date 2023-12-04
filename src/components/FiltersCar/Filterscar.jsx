import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { modelsCar } from '../Constant/Constant';
import { ContainerFilter } from './FiltersCar.styled';

import DropdownItem from '../DropdownItem/DropdownItem';
import InputsMileasBlock from '../InputsMileasBlock/InputsMileasBlock';
import SearchButton from '../SearchButton/SearchButton';

const FiltersCar = ({ adverts, onOffFiltered, inAdvertsFiltered }) => {
  const [priceCars, setPriceCars] = useState([10]);

  const defaultParams = { car: '', price: 0, from: '', to: '' };
  const [filterParams, setFilterParams] = useState(defaultParams);

  useEffect(() => {
    const price = adverts.map(advert =>
      parseInt(advert.rentalPrice.replace('$', ''))
    );
    const minPrice = Math.ceil(Math.min(...price) / 10) * 10;
    const maxPrice = Math.ceil(Math.max(...price) / 10) * 10;
    const pricesCars = [minPrice];
    const N = (maxPrice - minPrice) / 10;

    for (let i = 1; i <= N; i += 1) {
      pricesCars.push(pricesCars[i - 1] + 10);
    }
    setPriceCars(pricesCars);
  }, [adverts]);

  const onSetFilterParams = (name, value) => {
    setFilterParams({ ...filterParams, [name]: value });
  };

  const onSetFilterParamsMileas = (name, value) => {
    if (value !== '' && parseInt(value.replace(/,/g, ''))) {
      const formatNumber = parseInt(value.replace(/,/g, '')).toLocaleString(
        'en-IN'
      );
      setFilterParams({
        ...filterParams,
        [name]: formatNumber,
      });
    } else {
      setFilterParams({
        ...filterParams,
        [name]: '',
      });
    }
  };
  const onFilter = () => {
    const { car, price, from, to } = filterParams;
    if (
      (car === 'Enter the text' || car === '') &&
      (price === 'To $' || price === 0) &&
      from === '' &&
      to === ''
    ) {
      toast.success('Change flter params');
    }
    inAdvertsFiltered(
      adverts.filter(advert => {
        const { make, rentalPrice, mileage } = advert;

        return (
          (car === '' || car === 'Enter the text' ? true : make === car) &&
          (price === 'To $' || price === 0
            ? true
            : parseInt(rentalPrice.replace('$', '')) <=
              price.replace(/[^0-9]/g, '')) &&
          (from === '' ? true : mileage >= parseInt(from.replace(/,/g, ''))) &&
          (to === '' ? true : mileage <= parseInt(to.replace(/,/g, '')))
        );
      })
    );
    onOffFiltered(true);
  };

  return (
    <ContainerFilter>
      <DropdownItem
        $widthBox={'224px'}
        title="Car brand"
        placeholder="Enter the text"
        dataArray={modelsCar}
        name="car"
        filterParams={filterParams}
        onSetFilterParams={onSetFilterParams}
      />

      <DropdownItem
        $widthBox={'125px'}
        title="Price"
        placeholder="To $"
        dataArray={priceCars}
        placeholderPrice="true"
        name="price"
        filterParams={filterParams}
        onSetFilterParams={onSetFilterParams}
      />

      <InputsMileasBlock
        filterParams={filterParams}
        onSetFilterParams={onSetFilterParamsMileas}
      />

      <SearchButton content={'Search'} onClick={onFilter} />
      <SearchButton
        content={'Reset'}
        onClick={() => {
          onOffFiltered(false);
          setFilterParams(defaultParams);
        }}
      />
    </ContainerFilter>
  );
};
export default FiltersCar;
