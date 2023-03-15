const initialState = {
  pokemon: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};
export default mainReducer;
