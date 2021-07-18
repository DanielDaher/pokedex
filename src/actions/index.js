// actions
const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavoritePokemon = (payload) => ({type: ADD_FAVORITE, payload});

export const removeFavoritePokemon = (payload) => ({ type: REMOVE_FAVORITE, payload});
