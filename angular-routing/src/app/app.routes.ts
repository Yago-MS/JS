import { Routes } from '@angular/router';
import {Ex01Component} from "../ex01/ex01.component";
import {Ex02Component} from "../ex02/ex02.component";
import {Ex03Component} from "../ex03/ex03.component";
import {Ex04Component} from "../ex04/ex04.component";
import {Ex05Component} from "../ex05/ex05.component";
import {Ex06Component} from "../ex06/ex06.component";
import {Ex07Component} from "../ex07/ex07.component";
import {Ex08Component} from "../ex08/ex08.component";
import {Ex09Component} from "../ex09/ex09.component";
import {Ex10Component} from "../ex10/ex10.component";
import {Form0RComponent} from "../form0-r/form0-r.component";
import {Form1RComponent} from "../form1-r/form1-r.component";
import {Form2TDComponent} from "../form2-td/form2-td.component";
import {Form1TDComponent} from "../form1-td/form1-td.component";

export const routes: Routes = [
  {path: "ej1", component: Ex01Component, title: "ej1"},
  {path: "ej2", component: Ex02Component, title: "ej2"},
  {path: "ej3", component: Ex03Component, title: "ej3"},
  {path: "ej4", component: Ex04Component, title: "ej4"},
  {path: "ej5", component: Ex05Component, title: "ej5"},
  {path: "ej6", component: Ex06Component, title: "ej6"},
  {path: "ej7", component: Ex07Component, title: "ej7"},
  {path: "ej8", component: Ex08Component, title: "ej8"},
  {path: "ej9", component: Ex09Component, title: "ej9"},
  {path: "ej10", component: Ex10Component, title: "ej10"},
  {path: "form0", component: Form0RComponent, title: "form0"},
  {path: "form1", component: Form1RComponent, title: "form1"},
  {path: "form1TD", component: Form1TDComponent, title: "form1TD"},
  {path: "form2", component: Form2TDComponent, title: "form2"},
];
