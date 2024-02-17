import {Component} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {createPasswordStrengthValidator} from "../passwdstrval";

@Component({
  selector: 'app-form1-r',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './form1-r.component.html',
  styleUrl: './form1-r.component.css'
})

export class Form1RComponent {
  // rForm:FormGroup = new FormGroup({});

  rForm = this.fb.group({
    mobile: ['555', [Validators.required, Validators.pattern("^[0-9]*$")]],
    num: ['666', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(6)]],
    passwd: ['', [Validators.required, Validators.minLength(6), createPasswordStrengthValidator()]],
  })

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    /* this.rForm = this.fb.group({
       mobile: ['555', [Validators.required, Validators.pattern("^[0-9]*$")]],
       num: ['666', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(600)]]
     });*/
  }

  /*
      get f(){
        return this.addForm.controls;
      }
  */

  submit() {
    console.log("reactive form submitted");
    console.log(this.rForm);
    console.log(this.rForm.value);
  }
}
