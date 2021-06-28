import {Store} from "@ngrx/store";
import {AppState} from "./app.state";
import {Injectable} from "@angular/core";
import {ToggleLogginApp} from "./app.actions";
// import {selectIsLogginIsLoggin} from "./app.selector";

@Injectable()
export class AppFacade{
  isLoggin$ = this.store.select(store => (store as any).isLoggin.isLoggin);

  constructor(private store: Store<AppState>) {}

  toggleLogin(){
    this.store.dispatch(new ToggleLogginApp())
  }

}
