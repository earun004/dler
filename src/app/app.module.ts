import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddAmbulanceComponent } from './add-ambulance/add-ambulance.component';
import { CommomApiService } from './commom-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddAmbulanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        timeOut: 5000,
        progressBar: true,
        progressAnimation: 'decreasing'}),
        BrowserAnimationsModule
  ],
  providers: [CommomApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
