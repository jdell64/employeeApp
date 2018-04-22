import {PhoneMaskDirective} from './phone-mask.directive';
import {Component, DebugElement} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, NgControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';


@Component({
  template: `<input type="text" name="phone" [(ngModel)]="phoneNumber" phoneMask>`
})
class TestPhoneMaskComponent {
  phoneNumber = '';

  constructor() {

  }
}

describe('PhoneMaskDirective', () => {
  let component: TestPhoneMaskComponent;
  let fixture: ComponentFixture<TestPhoneMaskComponent>;
  let inputEl: DebugElement;
  let ngControl: NgControl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [TestPhoneMaskComponent, PhoneMaskDirective],
      providers: [
        NgControl
      ]
    });
    fixture = TestBed.createComponent(TestPhoneMaskComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
    ngControl = inputEl.injector.get(NgControl)
  });

  beforeEach(async(() => {
    // The magic sauce!!
    // Because this is in an async wrapper it will automatically wait
    // for the call to whenStable() to complete
    fixture.detectChanges();
    fixture.whenStable();
  }));

  it('should create an instance', () => {
    const directive = new PhoneMaskDirective(ngControl);
    expect(directive).toBeTruthy();
  });


});
