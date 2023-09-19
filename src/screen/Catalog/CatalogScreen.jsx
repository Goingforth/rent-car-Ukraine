import { useState, useEffect } from 'react';
import { Advert } from 'components/Advert/Advert';

import {
  AdvertsUl,
  AdvertLi,
  LoadMore,
  CatalogDiv,
} from './CatalogScreen.styled';
//import axios from 'axios';
//import { SearchFilter } from '../../components/SearchFilter/SearchFilter';
//import { MyComponent } from '../../operations/operations';
export const CatalogScreen = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const url = new URL('https://65083c5c56db83a34d9bf950.mockapi.io/adverts');
    url.searchParams.append('completed', false);
    url.searchParams.append('page', page);
    url.searchParams.append('limit', 8);

    fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => setAdverts(prevAdverts => [...prevAdverts, ...res]))
      .catch(error => {
        console.log(error);
      });
  }, [page]);

  // useEffect(() => {
  //   if (localStorage.getItem('favorites').length !== 0) {
  //     setFavorites(localStorage.getItem('favorites'));
  //   }
  //   // localStorage.setItem('favorites', favorites);
  // }, []);

  // if (localStorage.getItem('favorites').length !== 0) {
  //   setFavorites(localStorage.getItem('favorites'));
  // }
  // useEffect(() => {
  //   localStorage.setItem('favorites', favorites);
  // }, [favorites]);

  const onOffFavorite = id => {
    let favor = localStorage.getItem('favorites');
    if (favor !== null) {
      if (favor === '') {
        localStorage.setItem('favorites', id);
      } else {
        let index = favor.split(',').indexOf(String(id));
        if (index === -1) {
          localStorage.setItem('favorites', [favor, id]);
        } else {
          favor = favor.split(',').filter(number => {
            return number !== String(id);
          });
          localStorage.setItem('favorites', favor);
        }
      }
    } else {
      localStorage.setItem('favorites', id);
    }
  };

  return (
    <>
      {adverts.length !== 0 && (
        <CatalogDiv>
          {/* <SearchFilter /> */}

          <AdvertsUl>
            {adverts.map(advert => (
              <AdvertLi key={advert.id}>
                <Advert advert={advert} onOffFavorite={onOffFavorite} />
              </AdvertLi>
            ))}
          </AdvertsUl>

          <LoadMore type="button" onClick={() => setPage(page + 1)}>
            Load more
          </LoadMore>
        </CatalogDiv>
      )}
    </>
  );
};
