import { useState, useEffect } from 'react';
import { Advert } from 'components/Advert/Advert';

import { AdvertsUl, AdvertLi } from './CatalogScreen.styled';
//import axios from 'axios';
//import { SearchFilter } from '../../components/SearchFilter/SearchFilter';
//import { MyComponent } from '../../operations/operations';
export const CatalogScreen = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);

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

  return (
    <>
      {adverts.length !== 0 && (
        <div>
          {/* <SearchFilter /> */}

          <AdvertsUl>
            {adverts.map(advert => (
              <AdvertLi key={advert.id}>
                <Advert advert={advert} />
              </AdvertLi>
            ))}
          </AdvertsUl>

          <button type="button" onClick={() => setPage(page + 1)}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};
