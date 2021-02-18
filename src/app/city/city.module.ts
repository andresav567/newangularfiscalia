import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import { ProvinceComponent } from './province/province.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [CityComponent, ProvinceComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule
  ]
})

export class CityModule {


 }

