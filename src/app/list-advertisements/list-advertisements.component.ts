import { Component, OnInit } from '@angular/core';
import {AdvertismentFacade} from "../add-advertisment/+state/advertisment.facade";

@Component({
  selector: 'app-list-advertisements',
  templateUrl: './list-advertisements.component.html',
  styleUrls: ['./list-advertisements.component.css']
})
export class ListAdvertisementsComponent implements OnInit {
  advertisements$ = this.advertismentsFacade.advertisements$;

  constructor(private advertismentsFacade: AdvertismentFacade) {
  }

  ngOnInit(): void {
  }


}
