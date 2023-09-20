//import { useState, useEffect } from 'react';
export const FavoritesScreen = () => {
  //const [car, setCar] = useState();
  //let cars = [];
  // const allCars = res => (cars = [...res]);
  const favorites = localStorage.getItem('favorites');
  //   console.log(typeof favorites);
  //   console.log(favorites.replace(/,/g, '&'));

  //   useEffect(() => {
  //     const url = new URL('https://65083c5c56db83a34d9bf950.mockapi.io/adverts');
  //     url.searchParams.append('completed', false);
  //     //  url.searchParams.append('page', page);
  //     //  url.searchParams.append('limit', 8);
  //     // console.log(url);
  //     fetch(url, {
  //       method: 'GET',
  //       headers: { 'content-type': 'application/json' },
  //     })
  //       .then(res => res.json())
  //       .then(res => allCars(res))
  //       //   .then(res => setCar(res))
  //       //.then(res => console.log(res))
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, [allCars]);
  //   console.log(favorites);
  //   console.log(cars);
  return <div>{favorites.replace(/,/g, '&')}</div>;
};
