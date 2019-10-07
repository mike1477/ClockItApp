import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, ConfirmEmailComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule { }
