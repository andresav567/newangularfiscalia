import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city/city.component';
import { ProvinceComponent } from './city/province/province.component';


const routes: Routes = [
  { path: '', component: ProvinceComponent },
  { path: 'city/:id', component: CityComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }