import {Component, Input, OnInit} from '@angular/core';
import {AdvertismentFacade} from "../add-advertisment/+state/advertisment.facade";

@Component({
  selector: 'app-whishitem-advertisement',
  templateUrl: './whishitem-advertisement.component.html',
  styleUrls: ['./whishitem-advertisement.component.css']
})
export class WhishitemAdvertisementComponent implements OnInit {
@Input() advertisement!: any;

  constructor(private advertismentsFacade: AdvertismentFacade) {
  }

  ngOnInit(): void {
  }
  toogleWhishList(id: string) {
    this.advertismentsFacade.whishListAdvertisement(id)
  }
}
