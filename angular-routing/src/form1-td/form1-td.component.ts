import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-form1-td',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form1-td.component.html',
  styleUrl: './form1-td.component.css'
})
export class Form1TDComponent {
  user =  {
    firstName: 'user name',
    password:  'test'
  };

  onSubmitTemplateProperties() {
    console.log(this.user);
  }

  protected readonly isNaN = isNaN;
}
