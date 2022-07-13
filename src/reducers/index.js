import { ADD_MOVIES } from '../actions';


const instialMoviesState = {
   list: [],
   favourites:[]
}
export default function movies(state = instialMoviesState, action) {
   if (action.type === ADD_MOVIES) {

      return {
         ...state,
         list:action.movies
      }
   }

   return state;
}

