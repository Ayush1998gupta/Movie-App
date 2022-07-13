import { combineReducers } from 'redux';

import {
   ADD_MOVIES,
   ADD_FAVOURITE,
   REMOVE_FROM_FAVOURITES,
   SET_SHOW_FAVOURITES,
   ADD_MOVIES_TO_LIST
} from '../actions';


const instialMoviesState = {
   list: [],
   favourites: [],
   showFavourites: false
};
export function movies(state = instialMoviesState, action) {

   console.log('MOVIES REDUSER');
   // if (action.type === ADD_MOVIES) {

   //    return {
   //       ...state,
   //       list:action.movies
   //    }
   // }

   // return state;

   switch (action.type) {
      case ADD_MOVIES:
         return {
             ...state,
         list:action.movies
         }
      
      case ADD_FAVOURITE:
         return {
             ...state,
            favourites:[action.movie, ...state.favourites]
         }
      
      case REMOVE_FROM_FAVOURITES:

         const filteredArray = state.favourites.filter(
            movie => movie.Title !== action.movie.Title
         );
         return {
            ...state,
            favourites:filteredArray
         }
      case SET_SHOW_FAVOURITES:
         return {
            ...state,
            showFavourites:action.val
         }
      case ADD_MOVIES_TO_LIST:
         return {
            ...state,
            list:[action.movie, ...state.list]
         }
      
      default:
         return state;
   }
   
};

const initialSearchState = {
   result: {}
};
export function search(state = initialSearchState, action) {
    console.log('SEARCH REDUSER');
   return state;
};

// const initalRootState = {
//    movies: instialMoviesState,
//    search: initialSearchState
// };



// export default function rootReducre(state=initalRootState, action) {
//    return {
//       movies: movies(state.movies, action),
//       search: search(state.search, action)
//    }
// };

export default combineReducers({
   // movies: movies,
   // search:search
   movies,
   search
});