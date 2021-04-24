import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HelloComponent implements OnChanges, AfterViewChecked, AfterViewInit, AfterContentInit, OnInit, OnDestroy {
  public static counter = 0;
  public id: number;
  @Input() public heading: string;
  @Input() public expand = false;
  @Input() public clicks: number;

  @Output() public headingClick = new EventEmitter<number>();

  constructor() {
    HelloComponent.counter++;
    this.id = HelloComponent.counter;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', this.id, changes);
    const clicks: SimpleChange = changes.clicks;
    console.log(clicks.previousValue, '->', clicks.currentValue);
  }

  ngOnInit(): void {
    console.log('OnInit', this.id);
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit', this.id);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit', this.id);
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked', this.id);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy', this.id);
  }

  public onHeadingClick($event: MouseEvent): void {
    this.headingClick.emit(this.id);
  }
}
