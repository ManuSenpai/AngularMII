import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './pages/input/input.component';
import { RouterModule, Routes } from '@angular/router';
import { AirlinetableComponent } from './pages/airlinetable/airlinetable.component';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AirlinetableModule } from './pages/airlinetable/airlinetable.module';
import { InputModule } from './pages/input/input.module';

const appRoutes: Routes = [
  {
    path: '',
    component: InputComponent
  },
  {
    path: 'table',
    component: AirlinetableComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    AirlinetableModule,
    InputModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [NgForm],
  providers: [ NgForm ],
  bootstrap: [AppComponent]
})
export class AppModule { }
