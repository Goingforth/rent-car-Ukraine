import { useState, useEffect } from 'react';
import { BASE_URL, modelsCar } from 'components/Constant/Constant';
import { nanoid } from 'nanoid';

import { FilterCarDiv } from './FilterCar.styled';

export const FilterCar = () => {
  //  const [car, setCar] = useState(modelsCar[0]);
  const [filterParams, setFilterParams] = useState({
    car: modelsCar[0],
    price: 0,
    mileage: 0,
  });

  useEffect(() => {
    const url = new URL(BASE_URL);
    url.searchParams.append('completed', false);

    fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => console.log(res))
      // .then(res => setCars(res))

      .catch(error => {
        console.log(error);
      });
  }, []);

  // const handleChange = event => {
  //   setValue(event.target.value);
  //   const Dropdown = ({ value, options, onChange }) => {
  //     return (
  //       // <label>
  //       //   <select value={value} onChange={onChange}>
  //       //     {options.map(option => (
  //       //       <option value={option.value}>{option.value}</option>
  //       //     ))}
  //       //   </select>
  //       // </label>
  //     );
  //   };
  // };
  const onChange = evt => {
    const { name, value } = evt.target;
    setFilterParams({ ...filterParams, [name]: value });
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(filterParams);
  };

  return (
    <FilterCarDiv>
      <form onSubmit={handleSubmit}>
        <label>
          Car brand
          <select
            name="car"
            value={filterParams.car}
            options={modelsCar}
            onChange={onChange}
          >
            {modelsCar.map(modelCar => (
              <option key={nanoid()} value={modelCar}>
                {modelCar}
              </option>
            ))}
          </select>
          <label>
            Price/ 1 hour
            <select
              name="price"
              value={filterParams.price}
              options={modelsCar}
              onChange={onChange}
            >
              {modelsCar.map(modelCar => (
                <option key={nanoid()} value={modelCar}>
                  {modelCar}
                </option>
              ))}
            </select>
          </label>
        </label>
        <button type="submit">Search</button>
      </form>
    </FilterCarDiv>
  );
};
