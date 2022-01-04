import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './components/form/form.component';

//declaracion de la ruta home
const routes: Routes = [
{
  path: 'home',
  component: FormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
