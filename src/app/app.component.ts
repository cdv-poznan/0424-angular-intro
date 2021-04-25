import { Component, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig, APP_CONFIG } from './app.config';

@Component({
  selector: 'cdv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, @Inject(APP_CONFIG) private config: AppConfig, private elementRef: ElementRef) {
    console.log(elementRef);
  }
}
