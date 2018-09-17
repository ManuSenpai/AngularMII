import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    NgForm,
    AirlinetableComponent,
    HttpClientModule
  ],
  declarations: []
})

export class AirlinetableModule {
  constructor( private httpClient: HttpClient){}
}
