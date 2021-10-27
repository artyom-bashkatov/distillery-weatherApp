import {
  ADD_TO_FAVORITES,
  GET_CITIES,
  REMOVE_FROM_FAVORITES,
  UPDATE_TEMP,
} from "./actionTypes";

export type AddToFavoritesType = {
  city: string | object | null | any;
  temp_c: string;
  temp_f: string;
  lastUpdated: number;
};

type UpdateTempType = {
  location: {
    name: string
  },
  current: {
    temp_c: number,
    temp_f: number
  }
}

interface IAddToFavorites {
  type: typeof ADD_TO_FAVORITES;
  payload: AddToFavoritesType;
}

interface IGetCities {
  type: typeof GET_CITIES;
  payload: string;
}

interface IRemoveFromFavorites {
  type: typeof REMOVE_FROM_FAVORITES;
  payload: AddToFavoritesType;
}

// need refactor, why type is string just
interface IUpdateTemp {
  type: any;
  payload: UpdateTempType | any;
}

export type FavoritesActionTypes =
  | IAddToFavorites
  | IGetCities
  | IRemoveFromFavorites
  | IUpdateTemp;
