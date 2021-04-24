import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent {
  public name = 'Adrian';
  public isDisabled = false;
  public count = 0;

  public users = [
    {
      id: 10,
      name: 'Adrian',
      role: 'Admin',
    },
    {
      id: 17,
      name: 'Ala',
      role: 'User',
    },
    {
      id: 21,
      name: 'Marek',
      role: 'Other',
    },
  ];

  constructor() {}

  onButtonClicked($event: MouseEvent): void {
    console.log('Click', $event);
    this.count++;
  }

  onEnter($event: MouseEvent): void {
    console.log($event.type);
  }

  onInputChange(value: string): void {
    this.name = value;
  }
}
