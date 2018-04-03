import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { AppRoutesModule } from './app.routes'

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '@env/environment';
import { SessionComponent } from './session/session.component';
import {FormService} from "./service/form.service";

const FIREBASE_MODULES = [
  AngularFireModule.initializeApp(environment.config.firebase),
  AngularFireAuthModule,
  AngularFirestoreModule
];

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WorkoutPlanComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FIREBASE_MODULES,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutesModule
  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
