import { RegistrationService } from './registration.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Not required for reactive forms
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component'; 
@NgModule({
  declarations: [AppComponent, RegistrationFormComponent], 
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  