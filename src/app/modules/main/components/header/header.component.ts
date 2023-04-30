import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private iconReg: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.domSanitizer.bypassSecurityTrustResourceUrl("../src/assets/icons/inst.svg");
    this.domSanitizer.bypassSecurityTrustResourceUrl("../src/assets/icons/twitter.svg")
    this.iconReg.addSvgIcon(
      `inst`,
      `../src/assets/icons/inst.svg`
    );
    this.iconReg.addSvgIcon(
      `twitter`,
      `../src/assets/icons/twitter.svg`
    );

  }

  ngOnInit(): void {
  }

}
