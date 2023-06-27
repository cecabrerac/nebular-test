import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export class TranslationHttpLoader implements TranslateLoader {
  constructor(private httpClient: HttpClient) {}

  /**
   * Gets the translations from the server
   */
  public getTranslation(lang: string): Observable<Object> {
    if (lang == null) {
      lang == 'en';
    }

    let urls = {
      // en: 'http://localhost:3000/en',
      pt: 'https://run.mocky.io/v3/db1e37da-342e-4918-8ce2-bd30aa12fe79',
      fr: 'https://run.mocky.io/v3/6960c960-ea66-42a0-87f1-f34568ecb740',
    };

    let observer = new Observable((observer) => {
      this.httpClient.get(urls[lang]).subscribe(
        (data) => {
          observer.next(data);
          observer.complete();
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });

    return observer;
  }
}
