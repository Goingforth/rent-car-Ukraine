import { useState, useEffect } from 'react';
import { BASE_URL } from 'components/Constant/Constant';
import { ImageDiv, BasicData, Model } from 'components/Advert/Advert.styled';
import { AdvertDiv, FavoritesUl } from './FavoritesScreen.styled';

import BrokenImage from '../../components/Constant/no_image.jpg';
const FavoritesScreen = () => {
  const [cars, setCars] = useState([]);

  const favorites = localStorage.getItem('favorites');
  const imageOnError = event => {
    event.currentTarget.src = BrokenImage;
  };

  useEffect(() => {
    const url = new URL(BASE_URL);
    fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => setCars(res))

      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <FavoritesUl>
        {favorites !== null && favorites.length > 0 ? (
          cars.map(
            car =>
              favorites.includes(car.id) && (
                <li key={car.id}>
                  <AdvertDiv>
                    <ImageDiv>
                      <img
                        src={car.img}
                        onError={imageOnError}
                        width={274}
                        height={268}
                        alt={car.make}
                        display="block"
                      />
                    </ImageDiv>

                    <BasicData>
                      <div>
                        {car.make} <Model>{car.model}</Model>,{car.year}
                      </div>
                      <div>{car.rentalPrice}</div>
                    </BasicData>
                  </AdvertDiv>
                </li>
              )
          )
        ) : (
          <h3>Sorry, but you haven't chosen a car yet.</h3>
        )}
      </FavoritesUl>
    </div>
  );
};
export default FavoritesScreen;
