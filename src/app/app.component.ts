import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cdv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Angular Intro';
  public showTemplates = false;
  public clicks = 0;

  constructor(private router: Router) {}

  public onHelloHeadingClick(clicks: number): void {
    this.clicks += clicks;
  }
}
