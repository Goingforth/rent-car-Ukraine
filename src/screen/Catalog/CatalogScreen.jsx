import { useState, useEffect } from 'react';
//import axios from 'axios';
//import { SearchFilter } from '../../components/SearchFilter/SearchFilter';
//import { MyComponent } from '../../operations/operations';
export const CatalogScreen = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  //   useEffect(() => {
  //     let ignore = false;
  //     fetchStuff().then(res => {
  //       if (!ignore) setResult(res);
  //     });
  //     return () => {
  //       ignore = true;
  //     };
  //   }, []);
  useEffect(() => {
    let ignore = false;
    const url = new URL('https://65083c5c56db83a34d9bf950.mockapi.io/adverts');
    url.searchParams.append('completed', false);
    url.searchParams.append('page', page);
    url.searchParams.append('limit', 8);

    fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => res.json())

      //   .then(res => setAdverts(prevAdverts => [...prevAdverts, ...res]))
      .then(res => {
        if (!ignore) {
          setAdverts(prevAdverts => [...prevAdverts, ...res]);
        }
        return () => {
          ignore = true;
        };
      })

      //.then(() => console.log(adverts))
      //.then(res => console.log(res))
      .catch(error => {
        // handle error
      });
  }, [page]);

  // console.log(adverts);
  return (
    <div>
      {adverts.length !== 0 && (
        <div>
          {/* <SearchFilter /> */}
          <ul>
            {adverts.map(advert => (
              <li key={advert.id}>{advert.id}</li>
            ))}
          </ul>

          <button type="button" onClick={() => setPage(page + 1)}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
