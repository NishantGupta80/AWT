import { createStore } from "redux";
import Bugreducer from "./Bugreducerui";

const store = createStore(Bugreducer);

export type RootState = ReturnType<typeof store.getState>;
export default store;
