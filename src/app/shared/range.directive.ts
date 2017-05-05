import { Attribute, Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

import { NumberValidators } from './number.validator';

@Directive({
    selector: '[range][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => RangeValidator), multi: true }
  ]
})
export class RangeValidator {
  private _validator: any;

  constructor(@Attribute('range') range: string) {
    let arr = range.split(',');
    let min = 1;
    let max = 10;
    if (arr[0]) { min = parseInt(arr[0], 10); };
    if (arr[1]) { max = parseInt(arr[1], 10); };
    this._validator = NumberValidators.range(min, max);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this._validator(c);
  }
}
