import { SiteComponent } from './site/site.component';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: SiteComponent
  },
  {
    path: ':store',
    component: StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
