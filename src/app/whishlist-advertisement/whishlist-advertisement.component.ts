import { Component, OnInit } from '@angular/core';
import {AdvertismentFacade} from "../add-advertisment/+state/advertisment.facade";
import {Advertisement} from "../resources/interfaces/advertisement.interface";

@Component({
  selector: 'app-whishlist-advertisement',
  templateUrl: './whishlist-advertisement.component.html',
  styleUrls: ['./whishlist-advertisement.component.css']
})
export class WhishlistAdvertisementComponent implements OnInit {
  whishListAdvertisements: Advertisement[] = [];
  constructor(private advertismentsFacade: AdvertismentFacade) {}

  ngOnInit(): void {
    this.advertismentsFacade.advertisements$.subscribe((advertisments) => {
      this.whishListAdvertisements = [];
      advertisments.forEach((advertisment) => {
        if (advertisment.isWhishList == true) {
          this.whishListAdvertisements.push(advertisment);
        }
      });
    });

  }
}
