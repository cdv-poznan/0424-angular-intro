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

  constructor() {}

  ngOnInit(): void {
    this.timestamp = Date.now();
  }
}
