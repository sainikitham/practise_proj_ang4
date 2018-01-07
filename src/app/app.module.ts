import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: 'AIzaSyAxRhr0fgs9QOkHjXZ8KGt4KEs-u3H1DOs',
    authDomain: 'employeeregister-47d4c.firebaseapp.com',
    databaseURL: 'https://employeeregister-47d4c.firebaseio.com',
    projectId: 'employeeregister-47d4c',
    storageBucket: 'employeeregister-47d4c.appspot.com',
    messagingSenderId: '175323611425'
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
