import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HelloComponent implements OnInit {
  public static counter = 0;
  public id: number;
  @Input() public heading: string;
  @Input() public expand = false;

  @Output() public headingClick = new EventEmitter<number>();

  constructor() {
    HelloComponent.counter++;
    this.id = HelloComponent.counter;
  }

  ngOnInit(): void {}

  public onHeadingClick($event: MouseEvent): void {
    this.headingClick.emit(this.id);
  }
}
