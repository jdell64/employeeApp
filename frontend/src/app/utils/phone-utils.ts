export class PhoneUtils {

  static phoneFormatToDigit(val) {
    return val.replace(/\D/g, '');
  }

  static digitToPhoneFormat(val) {
    let newVal = '';
    if (val) {
      val = val.toString();
      newVal = val.replace(/\D/g, '');
      // don't show braces for empty value
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
    }
    return newVal;
  }
}
