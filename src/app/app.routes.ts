import { Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

export const routes: Routes = [
  { path: 'register', component: RegistrationFormComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' } // Default route
];
