import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AdvertismentFacade} from "./+state/advertisment.facade";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-advertisment',
  templateUrl: './add-advertisment.component.html',
  styleUrls: ['./add-advertisment.component.css']
})
export class AddAdvertismentComponent implements OnInit {
addAdvertismentForm = this.fb.group({
  title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
  name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
  surname:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
  price: ['', [Validators.required, Validators.min(1), Validators.max(20000000000)]],
  description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]]
})

  constructor(private fb: FormBuilder, private advertisementFacade: AdvertismentFacade) {

  }

  ngOnInit(): void {
  }
  onSubmit(){
     // console.log(this.addAdvertismentForm.value)
    this.advertisementFacade.addAdvertisement({
      id: uuidv4(),
      isWhishList: false,
      ...this.addAdvertismentForm.value
    })

  }
}
