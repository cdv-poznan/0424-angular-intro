import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HelloComponent implements OnInit {
  public static counter = 0;
  public counter: number;

  constructor() {
    HelloComponent.counter++;
    this.counter = HelloComponent.counter;
  }

  ngOnInit(): void {}
}
