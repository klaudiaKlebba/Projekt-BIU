import {Action} from "@ngrx/store";

export enum AppActionsTypes{
  toggleLoggin = "Toggle Loggin"
}
export class ToggleLogginApp implements Action{
  readonly type = AppActionsTypes.toggleLoggin;
}

export type AppActions = ToggleLogginApp;
