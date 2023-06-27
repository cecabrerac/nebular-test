import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  defaultLang: string = 'es';

  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.use(this.defaultLang);
  }

  changeLanguage(event) {
    let lang = (event.target as HTMLInputElement).value;
    this.translateService.use(lang);
  }
}
