import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from 'src/app/shared/validator/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',

})
export class RegisterPageComponent {

  public myForm : FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    username: ['', [Validators.required, cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  })

  constructor(
    private fb : FormBuilder
  ){}

  onSubmit(){

      this.myForm.markAllAsTouched();

  }

  isValidField( field: string) {
   // TODO obtener validacion desd un servicio

  }





}
