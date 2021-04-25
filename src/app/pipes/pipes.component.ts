import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipesComponent implements OnInit {
  public timestamp: number;
  public phrase = 'hello';
  public lang = 'pl';

  public obj = {
    hello: {
      en: ['Hello'],
      pl: ['Cześć'],
    },
  };

  public promise1 = new Promise(resolve => setTimeout(resolve, 2000, this.obj));
  public promise2 = new Promise(resolve => setTimeout(resolve, 3000, 'hello'));

  ngOnInit(): void {
    this.timestamp = Date.now();
  }
}
