import {AppState} from "../../+state/app.state";
import {AdvertisementState} from "../../resources/interfaces/advertisement-state.interface";
import {createSelector} from "@ngrx/store";

export const selectAdvertisements = (state: AppState )=> state.advertisements;
export const selectAdvertisementsAdvertisements = createSelector(
  selectAdvertisements,
  (state: AdvertisementState) => state.advertisements
)
