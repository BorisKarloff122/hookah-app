import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsHelperModule } from "../../shared/modules/forms.module";
import { LoginRoutingModule } from "./login-routing.module";
import { IconModule } from "../../shared/modules/icon.module";



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsHelperModule,
    IconModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
