import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import * as customValidators from '../../../shared/validator/validators'
import { ValidatorsService } from 'src/app/shared/service/validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',

})
export class RegisterPageComponent {

  public myForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  })

  constructor(
    private fb : FormBuilder,
    public validatorsService: ValidatorsService
  ){}

  onSubmit(){

      this.myForm.markAllAsTouched();

  }

  isValidField( field: string) {

    return this.validatorsService.isValidField(this.myForm, field)

  }





}
