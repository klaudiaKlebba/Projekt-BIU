import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login/login.component.html',
  styleUrls: ['./login/login.component.css']
})
export class LoginComponent implements OnInit{



  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],

  });



  constructor(private fb: FormBuilder, private route: Router) {}
  ngOnInit(): void{}

  onSubmit() {
    console.warn(this.loginForm.value);

    if(this.loginForm.value.email == 'klaudia@wp.pl' && this.loginForm.value.password == "klaudia"){
      this.route.navigate(['/app/app.component.html']);

    } else{
      alert('Zły e-mail bądź hasło');
    }
  }


}
