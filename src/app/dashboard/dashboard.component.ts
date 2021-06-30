import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddAdvertismentComponent} from "../add-advertisment/add-advertisment.component";
import {WhishlistAdvertisementComponent} from "../whishlist-advertisement/whishlist-advertisement.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
