import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppFacade} from "./+state/app.facade";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin$ = this.appFacade.isLoggin$ ;




  constructor(private fb: FormBuilder, private route: Router, private appFacade: AppFacade) {}
  ngOnInit(): void{}




}


