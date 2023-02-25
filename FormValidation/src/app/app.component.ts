import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
enum CheckBoxType {
  Male,
  Female,
  None,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FormValidation';
  reactiveForm: FormGroup;
  ngOnInit() {
    this.reactiveForm = new FormGroup(
      {
        firstname: new FormControl(null, [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]+'),
        ]),
        gender: new FormControl(null, [Validators.requiredTrue]),
        country: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        age: new FormControl(null),
      },
      {
        validators: this.validateOnSpecificCountry,
      }
    );
  }

  checkboxType = CheckBoxType;
  currentlyChecked: CheckBoxType | undefined;

  selectCheckBox(targetType: CheckBoxType) {
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.None;
      return;
    }
    this.currentlyChecked = targetType;
  }

  validateOnSpecificCountry(control: FormControl) {
    if (
      control.get('country').value === 'india' ||
      control.get('country').value === 'us' ||
      control.get('country').value === 'canada'
    ) {
      if (control.get('age').value === null) {
        return { ageisnotnull: true };
      }
    }
    return null;
  }
  onSubmit() {
    console.log(this.reactiveForm);
    if (this.reactiveForm.status == 'VALID') {
      return alert('success');
    }
    return alert('error');
  }
}
