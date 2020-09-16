import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FullscreenComponent } from './fullscreen/fullscreen.component';

const routes: Routes = [
//   {
//     path: 'fullscreen',
//     component: FullscreenComponent,
//     data: { title: 'Full Screen' }
//   }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class TradeRoutingModule { }