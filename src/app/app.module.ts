import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './pages/input/input.component';
import { RouterModule, Routes } from '@angular/router';
import { AirlinetableComponent } from './pages/airlinetable/airlinetable.component';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
    AppComponent,
    InputComponent,
    AirlinetableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
