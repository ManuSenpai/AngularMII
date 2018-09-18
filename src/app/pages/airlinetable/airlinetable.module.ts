import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { AirlinetableComponent } from './airlinetable.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ AirlinetableComponent ]
})

export class AirlinetableModule {
  constructor( private httpClient: HttpClient){}
}
