import {AdvertisementState} from "../resources/interfaces/advertisement-state.interface";
import {IslogginState} from "../resources/interfaces/isloggin-state.interface";

export interface AppState {
  isLoggin: IslogginState;
  advertisements: AdvertisementState;


}
