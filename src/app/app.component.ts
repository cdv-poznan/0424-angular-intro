import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig, APP_CONFIG } from './app.config';

@Component({
  selector: 'cdv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Angular Intro';
  public showTemplates = false;
  public clicks = 0;

  constructor(private router: Router, @Inject(APP_CONFIG) private config: AppConfig) {}

  public onHelloHeadingClick(clicks: number): void {
    this.clicks += clicks;
  }
}
