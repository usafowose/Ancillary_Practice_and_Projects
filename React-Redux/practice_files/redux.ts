import { legacy_createStore as createStore } from 'redux';

interface ActionType {
  type: string;
  payload?: number;
}
interface StoreState {
  value: number
}



const increment = (value?: number): ActionType => ({type: 'increment', payload: value ?? 1});
const decrement = (value?: number): ActionType => ({type: 'decrement', payload: value ?? 1});

const initialState: StoreState = { value: 0 };
const numberReducer = (state: StoreState = initialState, action: ActionType): StoreState => {
  switch(action.type) {
    case 'increment':
      return { value: state.value + action.payload ?? 1 };
    case 'decrement':
      return { value: state.value - action.payload ?? 1 };
    default:
      return state;
  }
};
const store = createStore(numberReducer);

const printStoreValueOnChange = () => {
  console.log(store.getState().value);
};
const unsubscribe = store.subscribe(printStoreValueOnChange);

store.dispatch(increment(2));
store.dispatch(increment());
store.dispatch(decrement());
unsubscribe();

const changeListener = () => {
  console.log('change occurred');
}
store.subscribe(changeListener);

console.log(store.getState());

