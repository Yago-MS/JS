import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-ex06',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ex06.component.html',
  styleUrl: './ex06.component.css'
})
export class Ex06Component {
  celcius: number = 0;
  fahrenheit: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  clear() {
    this.celcius = 0;
    this.fahrenheit = 0;
  }
  validate(e:KeyboardEvent){
    console.log(this.celcius)
    if(this.celcius.toString().match(/[^0-9]/g) && e.key != "Backspace"){
      e.preventDefault();
    }else{
      this.converToFahrenheit()
    }
  }
  convertToCelcius() {
    this.celcius = (this.fahrenheit - 32) * 5 / 9;
  }

  converToFahrenheit() {
    this.fahrenheit = this.celcius * 9 / 5 + 32;
  }

  protected readonly isNaN = isNaN;
}
