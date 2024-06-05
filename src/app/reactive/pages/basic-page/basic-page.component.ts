import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

const rtx5090 = {
  // name: 'RTX 5090',
  price: 25000 ,
  inStorage: '',
};

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit{

  // public myForm: FormGroup = new FormGroup({

  //   name: new FormControl('',[],[]),
  //   price: new FormControl(0,[],[]),
  //   inStorage: new FormControl(0,[],[]),
  // })
  public myForm: FormGroup = this.fb.group(
    {
    name: ['',[Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  }
  )

  constructor( private fb: FormBuilder){}

  ngOnInit(): void {
  //  this.myForm.reset(rtx5090)

  }

  getFieldError(field: string): string | null{
      if(!this.myForm.controls[field] ) return null;

      const errors = this.myForm.controls[field].errors || {};

      for (const key of Object.keys(errors)) {
        switch(key){
          case 'required':
            return 'Este campo es requerido';
          case 'minlength':
            return `Mínimo ${ errors['minilength'].requiredLength } caracters`;
        }

      }
      return '';
    }


  isValidField( field: string): boolean | null{
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
  }

  onSave():void {
    if (this.myForm.invalid){ this.myForm.markAllAsTouched()
       return;}


    console.log(this.myForm.value);
    this.myForm.reset( {price: 10 , inStorage:0});
  }

}
