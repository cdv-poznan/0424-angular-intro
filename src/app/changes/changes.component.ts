import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangesComponent implements OnInit, OnChanges {
  @Input() public clicks: number;
  public random: string;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    console.log('ChangesComponent:ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.titleService.setTitle(`clicks: ${changes.clicks.currentValue}`);
  }

  public getRandom(): string {
    return String(Math.random()).slice(2);
  }
}
