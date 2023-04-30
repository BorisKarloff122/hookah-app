import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
  ],
  exports:[
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [],

})
export class FormsHelperModule { }
