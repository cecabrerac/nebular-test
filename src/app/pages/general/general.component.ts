import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  defaultLang: string = 'es';

  constructor(public translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    const lang = translate.getBrowserLang();
    if (lang !== 'es' && lang !== 'en') {
      translate.setDefaultLang('en');
      translate.use('en');
    } else {
      translate.use('es');
    }
  }

  ngOnInit(): void {}
}
