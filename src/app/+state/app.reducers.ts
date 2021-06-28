import {AppActions, AppActionsTypes} from "./app.actions";

const appInitialState = {isLoggin: true}
export function AppReducers(
  state = appInitialState,
  action: AppActions,
)
{
  switch(action.type){
    case AppActionsTypes.toggleLoggin: {
      return {
        ...state,
        isLoggin: !state.isLoggin
      }
    }
    default:
      return{
        ...state
      }

  }
}
