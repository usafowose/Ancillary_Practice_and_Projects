import { legacy_createStore as createStore, combineReducers }from 'redux'
// Recipes Application...
// Will have the following 3 slices
//  1. allRecipes: an array of all recipe objects
//  2. favoriteRecipes: an array of  recipe obj chosen by user from allRecipes state
//  3. searchTerm: a string that filters which recipes are displayed.


// What all actions will need to be dispatched for this application and their type names and payload or not
// 1. 'allRecipes/fetchData' -> has payload of fetched data -> to load initialState -> dispatched only once -> API call should be made in this action and sent in payload property to ALL reducers via dispatch
// 2. favorites/addRecipe -> payload of recipe to add,
// 3. favorites/removeRecipe -> payload of id of fav to remove
// 4. searchTerm/setTerm -> payload of term to set
// 5. searchTerm/resetTerm -> no payload

interface AppState {
  allRecipes: Recipe[];
  favoriteRecipes: Recipe[];
  searchTerm: string;
}

const initialState: AppState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: '',
};

interface Action<T = any> {
  type: string;
  payload?: T
};

interface Recipe {
  id: number;
  name: string;
  img: string;
}

const mockAPIData: AppState = {
  allRecipes: [{
    id: 0,
    name: 'Spaghetti',
    img: 'mockUrl',
  }, {
    id: 1,
    name: 'Chicken Parm',
    img: 'mockUrl2'
  }, {
    id: 2,
    name: 'Fried Rice',
    img: 'mockUrl3'
  }],
  favoriteRecipes: [],
  searchTerm: ''
};

const fetchData = (): Action<Recipe[]> => ({ type: 'allRecipes/fetchData', payload: mockAPIData.allRecipes });
const addRecipe = (recipe: Recipe): Action<Recipe> => ({ type: 'favorites/addRecipe', payload: recipe });
const removeRecipe = (recipe: Recipe): Action<number> => ({ type: 'favorites/removeRecipe', payload: recipe.id });
const setSearchTerm = (term: string): Action<string> => ({ type: 'searchTerm/setTerm', payload: term });
const resetSearchTerm = (): Action<never> => ({ type: 'searchTerm/resetTerm' });

const searchTermReducer = (state: AppState, action: Action<any>): AppState => {
  if ()
  switch(action.type) {
    case 'searchTerm/setTerm':
      return { ...state, searchTerm: action.payload };
    case 'searchTerm/resetTerm':
      return { ...state, searchTerm: '' };
    default: return state;
  }
};

const favoritesReducer = (state: AppState, action: Action<any>): AppState => {
  switch(action.type) {
    case 'favorites/addRecipe':
      return { ...state, favoriteRecipes: [...state.favoriteRecipes, (action.payload)] };
    case 'favorites/removeRecipe':
      return { ...state, favoriteRecipes: state.favoriteRecipes.filter(({id}) => id !== action.payload) }
    default: return state;
  }
};

const allRecipesReducer = (state: AppState, action: Action<any>): AppState => {
  if (action.type === 'allRecipes/fetchData') {
    return { ...state, allRecipes: action.payload }
  }
};
