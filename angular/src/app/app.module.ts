import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Ex01Component} from '../ex01/ex01.component';
import {Ex02Component} from '../ex02/ex02.component';
import {Ex03Component} from '../ex03/ex03.component';
import {Ex04Component} from '../ex04/ex04.component';
import {Ex05Component} from '../ex05/ex05.component';
import {Ex06Component} from '../ex06/ex06.component';
import {Ex07Component} from '../ex07/ex07.component';
import {Ex08Component} from '../ex08/ex08.component';
import {Ex09Component} from '../ex09/ex09.component';
import {Ex10Component} from '../ex10/ex10.component';
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
    {path: 'ejercicio1', component: Ex01Component},
    {path: 'ejercicio2', component: Ex02Component},
    {path: 'ejercicio3', component: Ex03Component},
    {path: 'ejercicio4', component: Ex04Component},
    {path: 'ejercicio5', component: Ex05Component},
    {path: 'ejercicio6', component: Ex06Component},
    {path: 'ejercicio7', component: Ex07Component},
    {path: 'ejercicio8', component: Ex08Component},
    {path: 'ejercicio8', component: Ex09Component},
    {path: 'ejercicio10', component: Ex10Component},

];

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}