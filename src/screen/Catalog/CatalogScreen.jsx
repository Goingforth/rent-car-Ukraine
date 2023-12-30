import { useState, useEffect } from 'react';
import { Advert } from 'components/Advert/Advert';
import { BASE_URL } from 'components/Constant/Constant';
import FiltersCar from 'components/FiltersCar/Filterscar';

import Modal from 'react-modal';
import { ModalContent } from 'components/ModalContent/ModalContent';
import { customStyles } from 'components/ModalContent/CustomStyles';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  AdvertsUl,
  AdvertLi,
  LoadMore,
  CatalogDiv,
} from './CatalogScreen.styled';

const CatalogScreen = () => {
  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  const [favorites, setFavorites] = useState(localStorage.getItem('favorites'));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState();
  const [onFiltered, setOnFiltered] = useState(false);
  const [advertsFiltered, setAdvertsFiltered] = useState([]);

  const openModal = advert => {
    setModalIsOpen(true);
    setDataModal(advert);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onOffFiltered = state => {
    setOnFiltered(state);
  };

  const inAdvertsFiltered = data => {
    setAdvertsFiltered(data);
  };

  useEffect(() => {
    const url = new URL(BASE_URL);
    url.searchParams.append('page', page);
    url.searchParams.append('limit', 8);

    fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        if (res.length === 0) {
          throw new Error('Sorry,there are no more car offers...');
        } else {
          return res;
        }
      })
      .then(res => setAdverts(prevAdverts => [...prevAdverts, ...res]))
      .catch(error => {
        toast.error(`${error}`);
      });
  }, [page]);

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
    setFavorites(localStorage.getItem('favorites'));
  };

  const carsMap = !onFiltered ? adverts : advertsFiltered;

  return (
    <>
      {adverts.length !== 0 && (
        <CatalogDiv>
          <FiltersCar
            adverts={adverts}
            onOffFiltered={onOffFiltered}
            inAdvertsFiltered={inAdvertsFiltered}
          />
          <AdvertsUl>
            {carsMap.map(advert => (
              <AdvertLi key={advert.id}>
                <Advert
                  advert={advert}
                  onOffFavorite={onOffFavorite}
                  favorites={favorites}
                  openModal={openModal}
                />
              </AdvertLi>
            ))}
          </AdvertsUl>
          <div>
            {advertsFiltered.length === 0 &&
              onFiltered &&
              toast.error('Sorry, no car. Change flter params')}
          </div>

          <LoadMore type="button" onClick={() => setPage(page + 1)}>
            Load more
          </LoadMore>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
          >
            <ModalContent closeModal={closeModal} dataModal={dataModal} />
          </Modal>
        </CatalogDiv>
      )}
      <ToastContainer />
    </>
  );
};
export default CatalogScreen;
