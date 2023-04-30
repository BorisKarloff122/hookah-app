import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedComponent } from './components/feed/feed.component';
import { FooterComponent } from './components/footer/footer.component';
import {MainRoutingModule} from "./main-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FeedComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
