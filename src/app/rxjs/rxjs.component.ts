import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  public one: number[] = [1, 2, 3]; // 1
  public asyncOne: Promise<number[]> = Promise.resolve([1, 2, 3]); // 0-1
  public one$: Observable<number[]> = of([1, 2, 3], [2, 3, 4]); // 0-n

  public intarval$: Observable<number> = interval(1000);

  public fromAsyncOne$ = from(this.asyncOne);

  public clicks$ = fromEvent(document, 'click');

  constructor() {}

  ngOnInit(): void {
    const clicks$ = this.clicks$.pipe(
      map((event: MouseEvent) => [event.x, event.y]),
      map((coords: [number, number]) => coords[1]),
    );

    clicks$.subscribe(value => console.log(value));
  }
}
