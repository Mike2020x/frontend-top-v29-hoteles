import { createContext, useReducer, useContext } from 'react';

const HotelContext = createContext();

const initialState = {
  hotels: [],
  selectedHotel: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HOTELS":
      return {
        ...state,
        hotels: action.payload,
      };
    case "SELECT_HOTEL":
      return {
        ...state,
        selectedHotel: action.payload,
      };
    default:
      return state;
  }
}

// eslint-disable-next-line react/prop-types
export const HotelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HotelContext.Provider value={{ state, dispatch }}>
      {children}
    </HotelContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHotel = () => useContext(HotelContext);
