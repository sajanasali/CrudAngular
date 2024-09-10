import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemsComponent } from './create-items/create-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {path:'',component:ItemsComponent},
  {path:'create',component:CreateItemsComponent},
  {path:'edit/:id',component:EditItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
