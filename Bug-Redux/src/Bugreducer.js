

import { createStore } from "redux";
let lastid=1
function Bugreducer(state=[],action){
    if(action.type=="bugadded"){
       const updatedstate=[...state]
      updatedstate.push({
        id:lastid++,
        description:action.payload.description,
        resolved:false
      })
      return updatedstate;
    }
    if(action.type=="bugresolve"){
      const updatedstate=state.map((item)=>{
        if(item.id==action.payload.id)
          item.resolved=true;
        return item
      })
     return updatedstate;
   }
    return state
}

const store=createStore(Bugreducer)
console.log(store.getState());
store.dispatch({
    type:"bugadded",
    payload:{
      description:"First Bug"
    }
})
console.log(store.getState());

store.dispatch({
    type:"bugadded",
    payload:{
      description:"Second Bug"
    }
})
console.log(store.getState());



store.dispatch({
    type:"bugresolve",
    payload:{
      id:1
    }
})
console.log(store.getState());


const addBug=description=>{
  store.dispatch({
    type:"bugadded",
    payload:{
      description:description
    }
})
}

const deleteBug=id=>{
  store.dispatch({
    type:"bugadded",
    payload:{
      id:id
    }
})
}



const resolveBug=id=>{
  store.dispatch({
    type:"bugadded",
    payload:{
      id:id
    }
})
}