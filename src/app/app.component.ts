import { Component, ElementRef, Inject } from '@angular/core';
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

  get previewClassNames(): any {
    return {
      even: this.clicks % 2 === 0,
      odd: this.clicks % 2 !== 0,
      three: this.clicks % 3 === 0,
    };
  }

  get previewStyles(): any {
    return {
      'border-radius': `${this.clicks * 10}%`,
    };
  }

  constructor(private router: Router, @Inject(APP_CONFIG) private config: AppConfig, private elementRef: ElementRef) {
    console.log(elementRef);
  }

  public onHelloHeadingClick(clicks: number): void {
    this.clicks += clicks;
  }
}
