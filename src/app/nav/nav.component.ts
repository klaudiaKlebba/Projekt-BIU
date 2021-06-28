import { Component, OnInit } from '@angular/core';
import {AddAdvertismentComponent} from "../add-advertisment/add-advertisment.component";
import {WhishlistAdvertisementComponent} from "../whishlist-advertisement/whishlist-advertisement.component";
import {MatDialog} from "@angular/material/dialog";
import {AppFacade} from "../+state/app.facade";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dialog: MatDialog, private appFacade: AppFacade) {}

  ngOnInit(): void {
  }
  openAddAdvertisement(){
    this.dialog.open(AddAdvertismentComponent)
  }
  openWhishListAdvertisements(){
    this.dialog.open(WhishlistAdvertisementComponent)
  }
  logout(){
  this.appFacade.toggleLogin();
  }
}
