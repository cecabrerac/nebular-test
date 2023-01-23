import { AbstractControl, FormGroup } from '@angular/forms';

// To validate date

export function IsNotDate(controlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    let actualDate = new Date();
    let month = actualDate.getMonth() + 1; // start january 0 we need to add + 1
    let year = Number(actualDate.getFullYear().toString().substr(-2)); // 2022 -> 22
    let dateNumber = control.value.match(/\d{2,4}/g);
    let monthNumber = Number(dateNumber[0]);
    let yearNumber = Number(dateNumber[1]);

    if (
      control.value === '' ||
      monthNumber < 1 ||
      monthNumber > 12 ||
      yearNumber < year ||
      (monthNumber <= month && yearNumber === year)
    ) {
      control.setErrors({ mustMatch: true });
    } else {
      control.setErrors(null);
    }
  };
}
