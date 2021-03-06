import { Component } from '@angular/core';
import '@jsdesign/jsd-button';
import '@jsdesign/jsd-radio';
import '@jsdesign/jsd-checkbox';
import '@jsdesign/jsd-radio-chip';
import '@jsdesign/jsd-input';
import '@jsdesign/jsd-select';
import '@jsdesign/jsd-pin-input';
import '@jsdesign/jsd-datepicker';
import Model from './model';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-demo';
  theme: string = 'light';
  model: Model = {
    name: 'John',
    age: 30,
    address: 'Bangalore',
    gender: '',
    dob: '',
    department: '',
    diet: '',
    agreement: false,
    pin: ''
  };
  errors: any = {
    name: '',
    age: '',
    address: '',
    gender: '',
    dob: '',
    department: '',
    diet: '',
    agreement: '',
    pin: ''
  };
  deployUrl = environment.deployUrl;

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }

  updateForm(event: any) {
    setTimeout(() => {
      const elem = event.target;
      const property = elem.id;
      let value = elem.getAttribute('value');
      if (property === 'agreement') {
        value = JSON.parse(value).length ? true : false;
      }
      this.model[property] = value; 
      this.validateForm({[property]: value});
      event = null;
    }, 0);
  }

  requiredValidation(property: string, value: string, errors: any) {
    if (value) {
      errors[property] = '';
    } else {
      errors[property] = `Please enter ${property}`;
    }
    return errors;
  }

  validateForm(model: any) {
    let errorList: any = {...this.errors};
    Object.keys(model).forEach((property) => {
      errorList = this.requiredValidation(property, model[property], errorList);
    });
    console.log(errorList);
    this.errors = errorList;
  }

  submitForm(e) {
    this.validateForm(this.model);
    console.log('Submit!');
  }
}
