import { useEffect } from 'react';
export const FavoritesScreen = () => {
  const favorites = localStorage.getItem('favorites');
  //   console.log(typeof favorites);
  //   console.log(favorites.replace(/,/g, '&'));

  //   useEffect(() => {
  //     const url = new URL('https://65083c5c56db83a34d9bf950.mockapi.io/adverts');
  //     // url.searchParams.append('completed', false);
  //     // url.searchParams.append('id', '3582');
  //     console.log(url);
  //     fetch(url, {
  //       method: 'GET',
  //       headers: { 'content-type': 'application/json' },
  //     })
  //       .then(res => res.json())
  //       .theb(res => console.log(res))
  //       //   .then(res => setAdverts(prevAdverts => [...prevAdverts, ...res]))
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   });
  //   console.log(favorites);

  return <div>{favorites.replace(/,/g, '&')}</div>;
};
