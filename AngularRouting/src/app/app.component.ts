import {Component} from '@angular/core';
import {RouterOutlet, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'router-outlet',
  standalone:true,
  imports: [CommonModule, RouterOutlet],
  template: '<h1> probando</h1>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "angular routing"
}
