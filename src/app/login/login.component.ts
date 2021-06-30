import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import {Router} from "@angular/router";
import {AppFacade} from "../+state/app.facade";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{



  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],

  });



  constructor(private fb: FormBuilder, private route: Router, private appFacade: AppFacade) {}
  ngOnInit(): void{}

  onSubmit() {

    if(this.loginForm.value.email == 'klaudia@wp.pl' && this.loginForm.value.password == "klaudia"){

      this.appFacade.toggleLogin();
    } else{
      alert('Zły e-mail bądź hasło');
    }
  }


}
