import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddbookComponent} from './addbook/addbook.component';
import {ShowbookComponent} from './showbook/showbook.component';

const routes: Routes = [
  {path:'',redirectTo:'showbooks',pathMatch:'full'},
  {path:'addbook',component:AddbookComponent},
  {path:'showbooks',component:ShowbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
