import { Component } from '@angular/core';

@Component({
  selector: 'cdv-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Angular Intro';
  public showTemplates = false;
  public clicks = 0;

  public onHelloHeadingClick(clicks: number): void {
    this.clicks += clicks;
  }
}
