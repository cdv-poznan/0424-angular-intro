import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from './translate.service';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  public transform(phrase: string, lang?: string): string {
    return this.translateService.translate(phrase, lang);
  }
}
