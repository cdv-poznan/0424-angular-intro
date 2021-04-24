import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangesComponent implements OnInit, OnChanges {
  @Input() public clicks: number;
  public random: string;

  ngOnInit(): void {
    console.log('ChangesComponent:ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChangesComponent:ngOnChanges', changes);
    this.random = this.getRandom();
  }

  public getRandom(): string {
    return String(Math.random()).slice(2);
  }
}
