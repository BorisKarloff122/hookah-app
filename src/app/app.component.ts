import { Component } from '@angular/core';
import {populateLocalStorage} from "./shared/utils/utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hookah-app';

  ngOnInit(){
    populateLocalStorage();
  }
}
