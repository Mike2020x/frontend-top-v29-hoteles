import { createContext, useReducer, useContext } from "react";

const HotelContext = createContext();

const initialState = {
  hotels: [],
  selectedHotel: null,
  loading: true,
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
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export const HotelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HotelContext.Provider value={{ state, dispatch }}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => useContext(HotelContext);
