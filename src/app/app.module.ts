import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';


import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AddAdvertismentComponent } from './add-advertisment/add-advertisment.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { WhishlistComponent } from './whishlist/whishlist.component';
import {StoreModule} from "@ngrx/store";
import {AdvertisementReducer} from "./add-advertisment/+state/advertisment.reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {AdvertismentFacade} from "./add-advertisment/+state/advertisment.facade";
import { ListAdvertisementsComponent } from './list-advertisements/list-advertisements.component';
import {MatIconModule} from '@angular/material/icon';
import { WhishlistAdvertisementComponent } from './whishlist-advertisement/whishlist-advertisement.component';
import { WhishitemAdvertisementComponent } from './whishitem-advertisement/whishitem-advertisement.component';
import { NavComponent } from './nav/nav.component';
import {AppReducers} from "./+state/app.reducers";
import {AppFacade} from "./+state/app.facade";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddAdvertismentComponent,
    WhishlistComponent,
    ListAdvertisementsComponent,
    WhishlistAdvertisementComponent,
    WhishitemAdvertisementComponent,
    NavComponent


  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    StoreModule.forRoot({
      // @ts-ignore
      isLoggin: AppReducers,
      // @ts-ignore
      advertisements: AdvertisementReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, logOnly: environment.production
    }),



  ],
  providers: [AdvertismentFacade, AppFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }


