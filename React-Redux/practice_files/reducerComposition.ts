import { createStore } from "redux";

interface AppState {
  todos: ToDo[];
  filter: string;
};

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
};

const initialTodos: ToDo[] = [
  { id: 0, text: 'learn redux', completed: false },
  { id: 1, text: 'build a redux app', completed: true },
  { id: 2, text: 'do a dance', completed: false },
];
const todosReducer = (todos: ToDo[] = initialTodos, action) => {
  switch (action.type) {
    case 'todos/addTodo': 
      return [...todos, action.payload]
    case 'todos/toggleTodo':
      return todos.map(todo => {
        return (todo.id === action.payload.id) ? 
          { ...todo, completed: !todo.completed } :
          {...todo};
      });
    default:
      return todos;
  }
};
 
// Handles only `state.filter`
const initialFilter = 'SHOW_INCOMPLETE';
const filterReducer = (filter = initialFilter, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;
    default:
      return filter;
  }
};

const rootReducer = (state: AppState = {todos: initialTodos, filter: initialFilter }, action) => {
  const nextState = {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action)
  };
  return nextState;
};
 
const store = createStore(rootReducer);