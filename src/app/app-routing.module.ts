import {   NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { UserListComponent } from './user-list/user-list.component';
 
const routes: Routes = [{
  path:"",
  redirectTo:"user-list",
  pathMatch:"full"
},
{path :'user-list', component:UserListComponent},
{path : 'image-list',component:AlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
