// Reducer
const INITIAL_STATE = {
    id: [],
  };
  
  const ADD_FAVORITE = 'ADD_FAVORITE';
  const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

  function favoriteReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case ADD_FAVORITE:
        return {
          ...state,
          id: [...state.id, action.payload],
        };
        case REMOVE_FAVORITE:
        return {
          ...state,
          id: [...state.id.filter((item) => item !== action.payload)],
        };
      default:
        return state;
    }
  };
  
  export default favoriteReducer;
