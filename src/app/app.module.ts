import { HttpClientModule } from '@angular/common/http';
import { FirebaseService } from './services/firebase.service';
import { UsersModule } from './users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environments } from 'src/environments/enviroments.backup';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environments.firebaseConfig),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
