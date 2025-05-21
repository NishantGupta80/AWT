let lastid = 1;

export interface Bug {
  id: number;
  description: string;
  resolved: boolean;
}

interface Action {
  type: string;
  payload: any;
}

function Bugreducerui(state: Bug[] = [], action: Action): Bug[] {
  if (action.type == "bugadded") {
    const updatedstate = [...state];
    updatedstate.push({
      id: lastid++,
      description: action.payload.description,
      resolved: false,
    });
    return updatedstate;
  }
  if (action.type == "bugresolve") {
    const updatedstate = state.map((item) => {
      if (item.id == action.payload.id) item.resolved = true;
      return item;
    });
    return updatedstate;
  }
  return state;
}

export default Bugreducerui;
