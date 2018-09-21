import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { AirlinetableComponent } from './airlinetable.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxSoapModule } from 'ngx-soap';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    NgxSoapModule,
    HttpClientModule
  ],
  declarations: [ AirlinetableComponent ]
})

export class AirlinetableModule {
  constructor( private httpClient: HttpClient){}
}
