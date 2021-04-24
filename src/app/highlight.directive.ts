import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[colorHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() public colorHighlight: string;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.colorHighlight;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }

  constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    this.elementRef.nativeElement.style.display = 'block';
  }
}
