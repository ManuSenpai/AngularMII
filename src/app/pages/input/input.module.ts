import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';

@NgModule({
  imports: [
    CommonModule,
    NgForm,
    InputComponent,
  ],
  declarations: []
})
export class InputModule { }
