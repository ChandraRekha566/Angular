import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedComponent } from './shared/shared.component';
import { ErrorInfoComponent } from './error-info/error-info.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SharedComponent,
    ErrorInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
