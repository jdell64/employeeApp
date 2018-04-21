import {Directive} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[phoneMask]',
  host: {
    '(ngModelChange)': 'onInputChange($event)',
    '(keydown.backspace)': 'onInputChange($event.target.value, true)'
  }
})
export class PhoneMaskDirective {
  constructor(public model: NgControl) {
  }

  onInputChange(event, backspace) {
    // remove all mask characters (keep only numeric)
    let newVal = event.replace(/\D/g, '');
    // special handling of backspace necessary otherwise
    // deleting of non-numeric characters is not recognized
    // this laves room for improvement for example if you delete in the
    // middle of the string
    // console.log(backspace);
    // console.log(event);
    if (backspace) {
      // console.log('its a backspace');
      // console.log(newVal);
      newVal = newVal.substring(0, newVal.length);
    }

    // don't show braces for empty value
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '($1');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
    } else {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) $2-$3');
    }
    // set the new value
    this.model.valueAccessor.writeValue(newVal);
  }
}
