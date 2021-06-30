import {Injectable} from "@angular/core";
import {AppState} from "../../+state/app.state";
import {Store} from "@ngrx/store";
import {Advertisement} from "../../resources/interfaces/advertisement.interface";
import {AddAdvertisement, DelAdvertisement, WhishListAdvertisement} from "./advertisement.actions";
import {selectAdvertisementsAdvertisements} from "./advertisements.selector";

@Injectable()
export class AdvertismentFacade{
  advertisements$=this.store.select(selectAdvertisementsAdvertisements);

  constructor(private store: Store<AppState>) {}

  addAdvertisement(advertisement: Advertisement ){
    this.store.dispatch(new AddAdvertisement(advertisement))
  }
whishListAdvertisement(id: string){
    this.store.dispatch(new WhishListAdvertisement(id))
}
delAdvertisement(id: string){
    this.store.dispatch(new DelAdvertisement(id))
}

}
