import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-form0-r',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form0-r.component.html',
  styleUrl: './form0-r.component.css'
})
export class Form0RComponent {
  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
    "otro": new FormControl("thisss"),
  });

  onSubmitModelBased() {
    console.log("reactive form submitted");
    console.log(this.form);
    console.log(this.form.value);
  }

}
