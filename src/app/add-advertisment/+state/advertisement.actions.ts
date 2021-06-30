import {Action} from "@ngrx/store";
import {Advertisement} from "../../resources/interfaces/advertisement.interface";
//lista wartości
export enum AdvertisementActionsTypes{
  addAdvertisement = "Add Advertisement", //dodawanie
  delAdvertisement = "Del Advertisement", //usuwanie
  uptAdvertisement = "Upt Advertisement", //edycja
  whishListAdvertisement = "Whish List Advertisement", //zmiana statusu ulubionego
}

 export class AddAdvertisement implements Action{
  readonly type = AdvertisementActionsTypes.addAdvertisement;
  constructor(public payload: Advertisement) {}
 }

export class DelAdvertisement implements Action{
  readonly type = AdvertisementActionsTypes.delAdvertisement;
  constructor(public payload: string) {}
}


export class WhishListAdvertisement implements Action{
  readonly type = AdvertisementActionsTypes.whishListAdvertisement;
  constructor(public payload: string) {}
}

export type AdvertisemnetsAction = AddAdvertisement | DelAdvertisement | WhishListAdvertisement;

