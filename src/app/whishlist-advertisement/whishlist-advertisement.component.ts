import { Component, OnInit } from '@angular/core';
import {AdvertismentFacade} from "../add-advertisment/+state/advertisment.facade";
import {Advertisement} from "../resources/interfaces/advertisement.interface";

@Component({
  selector: 'app-whishlist-advertisement',
  templateUrl: './whishlist-advertisement.component.html',
  styleUrls: ['./whishlist-advertisement.component.css']
})
export class WhishlistAdvertisementComponent implements OnInit {
  advertisements$ = this.advertismentsFacade.advertisements$;
  whishListAdvertisements$: Advertisement[] = [];
  constructor(private advertismentsFacade: AdvertismentFacade) {}

  ngOnInit(): void {


  }
}
