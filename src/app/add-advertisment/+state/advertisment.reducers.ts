import {AdvertisementState} from "../../resources/interfaces/advertisement-state.interface";
import {AdvertisementActionsTypes, AdvertisemnetsAction} from "./advertisement.actions";

const advertisementInitialState: AdvertisementState ={
  advertisements: [
    {
      id:"eef33b69-0424-440d-ab3d-3f82c67aa6a7",
      title:"Praca ",
      name:"Pizza",
      surname:"Hut",
      price:3000,
      description:"Praca w pizza hut",
      isWhishList: false,
    },
    {
      id:"eef33b69-0424-440d-ab3d-3f82c67aa6a9",
      title:"Praca 2 ",
      name:"Pizza2",
      surname:"Hut2",
      price:30000,
      description:"Praca w pizza hut2",
      isWhishList: false,
    }
  ],

}

export function AdvertisementReducer(
  state = advertisementInitialState,
  action: AdvertisemnetsAction,
): AdvertisementState{
  switch(action.type){
    case AdvertisementActionsTypes.addAdvertisement: {
      return {
        ...state,  //zapobiega usunięciu reszty rzeczy ze state przy wywoływaniu akcji
        advertisements: state.advertisements.concat(action.payload)
      }
    }
    case AdvertisementActionsTypes.whishListAdvertisement: {

      return {
        ...state,
        advertisements: state.advertisements.map((advertisement) => advertisement.id == action.payload ? {...advertisement, isWhishList: !advertisement.isWhishList} : advertisement)    }
    }
    default:
      return{
        ...state
      }
  }
}
