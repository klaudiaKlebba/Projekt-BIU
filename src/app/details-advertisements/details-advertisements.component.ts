import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Advertisement} from "../resources/interfaces/advertisement.interface";

@Component({
  selector: 'app-details-advertisements',
  templateUrl: './details-advertisements.component.html',
  styleUrls: ['./details-advertisements.component.css']
})
export class DetailsAdvertisementsComponent implements OnInit {
  advertisement!: Advertisement;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DetailsAdvertisementsComponent) {
    // @ts-ignore //wylącza tslint dla linijki poniżej
    this.advertisement = data;
  }

  ngOnInit(): void {
  }

}
