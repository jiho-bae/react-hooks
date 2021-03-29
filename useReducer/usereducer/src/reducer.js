import uuid from "uuid/v4";

export const initialState = {
  toDos: [],
  completed: [],
};

export const ADD = "add";
export const DEL = "del";
export const COMPLETE = "complete";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
    case DEL:
      return { ...state, toDos: state.toDos.filter((toDo) => toDo.id !== action.payload) };
    case COMPLETE:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return { ...state, toDos: state.toDos.filter((toDo) => toDo.id !== action.payload), completed: [...state.completed, { ...target }] };
    default:
      throw new Error();
  }
};

export default reducer;
