import {Component, Input, OnInit} from '@angular/core';
import {AdvertismentFacade} from "../add-advertisment/+state/advertisment.facade";
import {MatDialog} from "@angular/material/dialog";
import {Advertisement} from "../resources/interfaces/advertisement.interface";
import { DetailsAdvertisementsComponent } from '../details-advertisements/details-advertisements.component';

@Component({
  selector: 'app-whishitem-advertisement',
  templateUrl: './whishitem-advertisement.component.html',
  styleUrls: ['./whishitem-advertisement.component.css']
})
export class WhishitemAdvertisementComponent implements OnInit {
@Input() advertisement!: any;

  constructor(private advertismentsFacade: AdvertismentFacade, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }
  toogleWhishList(id: string) {
    this.advertismentsFacade.whishListAdvertisement(id)
  }
  openDetailsAdvertisement(advertisement: Advertisement) { // metoda która wyświetla okno dialogowe ze szczegółami
    this.dialog.open(DetailsAdvertisementsComponent, {
      data: advertisement,
      width: '83%',
      maxWidth: '500px',
    });
  }
  delAdvertisement(id: string){
  this.advertismentsFacade.delAdvertisement(id)
  }
}
