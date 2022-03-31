import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [RegistrationComponent, AuthComponent],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  exports: [RegistrationComponent, AuthComponent],
})
export class SignInModule {}
