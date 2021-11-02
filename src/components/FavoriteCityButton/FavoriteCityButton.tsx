import React, { useEffect, useState } from "react";
import FavoriteButton from "components/UI/FavoriteButton";
import { connect } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/favoriteCitiesReducer/favoriteCitiesReducer";

type payalodFavorites = {
  city: string;
  temp_c: string;
  temp_f: string;
  lastUpdated: number;
};

type FavoriteCityButtonTypeProps = {
  cities: {
    city: string;
  }[];
  location: string;
  responseLocation: string;
  addToFavorites: (arg: payalodFavorites) => void;
  removeFromFavorites: (arg: string) => void;
  temp_c: string;
  temp_f: string;
  onClick?: () => void;
  disabled?: boolean;
  checked?: boolean;
};

const FavoriteCityButton: React.FC<FavoriteCityButtonTypeProps> = ({
  cities,
  location,
  responseLocation,
  addToFavorites,
  removeFromFavorites,
  temp_c,
  temp_f,
}: FavoriteCityButtonTypeProps) => {
  const [isFavorite, setFavorite] = useState(
    cities.find((obj) => obj.city === location)
  );
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    setFavorite(cities.find((obj) => obj.city === location));
  }, [cities, location]);

  useEffect(() => {
    if (location && location === responseLocation.toLowerCase()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [location, responseLocation]);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  return (
    <FavoriteButton
      onClick={() => {
        if (!isFavorite) {
          addToFavorites({
            city: location,
            temp_c: temp_c,
            temp_f: temp_f,
            lastUpdated: Date.now(),
          });
          setFavorite(isFavorite);
        } else {
          removeFromFavorites(location);
        }
      }}
      disabled={isDisabled}
      checked={isFavorite ? true : false}
    />
  );
};

const mapStateToProps = (state: {
  weatherData: {
    location: any;
    responseLocation: any;
    temp_c: any;
    temp_f: any;
  };
  cities: { arrOfCities: any };
}) => ({
  location: state.weatherData.location,
  responseLocation: state.weatherData.responseLocation,
  temp_c: state.weatherData.temp_c,
  temp_f: state.weatherData.temp_f,
  cities: state.cities.arrOfCities,
});

const mapDispatchToProps = (dispatch: any) => ({
    addToFavorites: (objOfCity: payalodFavorites) => {
        dispatch(addToFavorites(objOfCity));
    },
    removeFromFavorites: (city: string) => {
        dispatch(removeFromFavorites(city));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCityButton);
