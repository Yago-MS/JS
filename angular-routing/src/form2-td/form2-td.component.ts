import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-form2-td',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './form2-td.component.html',
  styleUrl: './form2-td.component.css'
})
export class Form2TDComponent {
  user =  {
    firstName: 'user name here',
    password:  'test'
  };
  otro:string ="";

  onSubmitTemplateFormData(formData:Object) {
    console.log(formData);
  }
}
