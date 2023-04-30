import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {getControl} from "../../../../shared/utils/forms.helper";
import {errMessages, errMessagesFormat, translations} from "../../../../shared/utils/translations";
import {LoginService} from "../../../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginMinLength = 3;
  public showPassword = false;
  public formSubmitted = false;
  public form = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(this.loginMinLength)]],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  public toggleShowPassword():void{
    this.showPassword = !this.showPassword;
  }

  public submitForm(){
    this.formSubmitted = true;
    if(this.form.valid){
      this.loginService.loginReq(this.form.value).subscribe((res)=>{
        if(res.data){
          this.router.navigate(['./main'])
        }
      });
    }
  }

  protected readonly getControl = getControl;
  protected readonly translations = translations;
  protected readonly errMessages = errMessages;
  protected readonly errMessagesFormat = errMessagesFormat;
}
