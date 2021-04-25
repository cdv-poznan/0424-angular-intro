import {Injectable} from '@angular/core';

interface Phrases {
  pl: string;
  en: string;
}

interface Translations {
  [key: string]: Phrases;
}


@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private phrases: Translations = {
    hello: {
      pl: 'Cześć!',
      en: 'Hello!',
    },
    goodbye: {
      pl: 'Papa',
      en: 'Good bye'
    }
  };

  public translate(phrase: string, lang: string = 'pl'): string {
    const translation = this.phrases[phrase]?.[lang];
    if (!translation) {
      console.warn(`Missing translation for ${phrase} in ${lang}`);
    }
    return translation ? translation : phrase;

  }
}
