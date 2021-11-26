import { combineReducers } from "redux";
import usuarioReducer from "./usuarioReducer"
import temporadaReducer from "./temporadaReducer";

export default combineReducers({
  usuario: usuarioReducer,
  temporadas: temporadaReducer
});
