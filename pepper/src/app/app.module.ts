import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';


export const firebaseConfig = {
  apiKey: "AIzaSyCYwu9OQAMk8gA4Q6v99zV0rBj3uUQYXkQ",
  authDomain: "pepper-f9cd4.firebaseapp.com",
  databaseURL: "https://pepper-f9cd4.firebaseio.com",
  storageBucket: "pepper-f9cd4.appspot.com",
  messagingSenderId: "887262367617"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
