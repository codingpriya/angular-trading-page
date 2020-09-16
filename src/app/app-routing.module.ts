import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullscreenComponent } from './views/trade/fullscreen/fullscreen.component';


const routes: Routes = [
  {
    path: '',
    component: FullscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
